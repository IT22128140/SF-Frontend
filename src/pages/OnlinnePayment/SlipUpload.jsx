import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import SubmitButton from "../../components/button2/SubmitButton";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import RejectButton from "../../components/button2/RejectButton";

const SlipUpload = () => {
  const [payment, setPayment] = useState({});
  const [totalpayment,setTotalPayment] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [fullName, setFullName] = useState("");
  const [slip, setSlip] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState([]);
  // const [deliveryDetailsId, setDeliveryDetailsId] = useState("");
  const [tot, setTot] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTot(sessionStorage.getItem("total"));
    //  setDeliveryDetails (JSON.parse(sessionStorage.getItem('deliveryDetails')));
    // setDeliveryDetailsId(sessionStorage.getItem('deliveryDetailsId'));
    const deliveryDetailsId = sessionStorage.getItem("deliveryDetailsId");

    axios
      .get(`http://localhost:5555/deliveryDetailsPayment/${deliveryDetailsId}`)
      .then((response) => {
        setDeliveryDetails(response.data);
        console.log(response.data);
      });

    axios
      .get(`http://localhost:5555/cart/66387934d3d8881e210fd50a`)
      .then((response) => {
        setCart(response.data);
        setLoading(false);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleUpload = (e) => {
    console.log(payment);
  };

  const handleEmailChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
  };

  const handleBranchChange = (e) => {
    setBranchName(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }
    if (bankName.length > 30) {
      alert("Bank Name must be 30 characters or less");
      return;
    }
    if (branchName.length > 30) {
      alert("Branch must be 30 characters or less");
      return;
    }

    if (!emailAddress.includes("@")) {
      alert("Invalid email address");
      return;
    }
    if (fullName.length > 30) {
      alert("Full Name must be 30 characters or less");
      return;
    }

    const data = {
      totalpayment:tot,
      emailAddress,
      phoneNumber,
      bankName,
      branchName,
      fullName,
      slip,
    };

    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:5555/payment`, data);
      setLoading(false);
      
      const id = response.data._id;
      console.log(id);
      const data2 = {
        userId: "66387934d3d8881e210fd50a",
        products: cart.items,
        deliveryDetails: deliveryDetails,
        total: tot,
        paymentId: id,
      };
      const orderC = await axios.post(`http://localhost:5555/order`, data2);
      navigate(`/PaymentSucc/${id}`);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("An error occurred while processing your request");
    }
  };

  const handlePaymentSlip = async (file) => {
    if (!file) {
      alert("No file selected");
      return;
    }

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > 5) {
      alert("File size must be less than 5MB");
      return;
    }

    const base64 = await convertToBase64(file);
    setSlip(base64);
  };

  return (
    <div>
      <div>
        <CustomerNavbar />

        <div className="p-4 h-screen overflow-y-auto">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl my-8">Payment Slip Page</h1>
          </div>
          <label className="block text-ternary text-2xl font-bold mb-2 absolute top-[200px] left-[300px] ">
            Bank Details
          </label>
          <br />

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[280px] left-[300px]">
            Bank Name
          </label>
          <span className="border border-black border-1 p-1 block mb-2 absolute top-[310px] left-[300px]">
            Seylan bank
          </span>

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[365px] left-[300px]">
            Account Number
          </label>
          <span className="border border-black border-1 p-1 block mb-2 absolute top-[395px] left-[300px]">
            123456789
          </span>

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[450px] left-[300px]">
            Branch
          </label>
          <span className="border border-black border-1 p-1 block mb-2 absolute top-[485px] left-[300px]">
            malabe
          </span>

          <hr className="border border-black border-1 absolute left-0 right-0 w-full top-0 absolute top-[550px]  " />

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[580px] left-[300px]">
            Add Slip image
          </label>
          <input
            type="file"
            name="slip"
            id="slip"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => handlePaymentSlip(e.target.files[0])}
            className="appearance-none border border-black border-1 p-1 block mb-2 absolute top-[610px] left-[300px] w-60 h-20"
          />

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[715px] left-[300px]">
            Bank Name
          </label>
          <input
            type="text"
            value={bankName}
            onChange={handleBankNameChange}
            placeholder="Bank Name"
            className="border border-black border-1 p-1 block mb-2 absolute top-[745px] left-[300px]"
          />

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[800px] left-[300px]">
            Branch
          </label>
          <input
            type="text"
            value={branchName}
            onChange={handleBranchChange}
            placeholder="Branch"
            className="border border-black border-1 p-1 block mb-2 absolute top-[830px] left-[300px]"
          />
          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[580px] left-[900px]">
            Email Address
          </label>
          <input
            type="email"
            value={emailAddress}
            onChange={handleEmailChange}
            placeholder="Email Address"
            className="border border-black border-1 p-1 block mb-2 absolute top-[610px] left-[900px]"
          />

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[715px] left-[900px]">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Full Name"
            className="border border-black border-1 p-1 block mb-2 absolute top-[745px] left-[900px]"
          />
          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[800px] left-[900px]">
            Phone Number
          </label>
          <input
            type="number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone Number"
            className="border border-black border-1 p-1 block mb-2 absolute top-[830px] left-[900px]"
          />
          <div>
            <Link>
              <SubmitButton
                onClick={handleSubmit}
                className="absolute top-[900px] left-[600px]"
              ></SubmitButton>
            </Link>

            <Link to={`/Payment`}>
              <RejectButton className=" absolute top-[900px] left-[800px]">
                Back
              </RejectButton>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default SlipUpload;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
