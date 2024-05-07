import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Spinner from "../../components/Spinner";
import SubmitButton from "../../components/button2/SubmitButton";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import RejectButton from "../../components/button2/RejectButton";

const SlipUpload = () => {
  const [payment, setPayment] = useState({});
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [branch, setBranch] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false); // Initially set to true to show loading spinner
  const { id } = useParams();

  const handleUpload = (e) => {
    console.log(payment);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleBankNameChange = (e) => {
    setBankName(e.target.value);
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }
    if (bankName.length > 30) {
      alert("Bank Name must be 30 characters or less");
      return;
    }
    if (branch.length > 30) {
      alert("Branch must be 30 characters or less");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email address");
      return;
    }
    if (fullName.length > 30) {
      alert("Full Name must be 30 characters or less");
      return;
    }

    console.log("Form submitted successfully");
  };

  useEffect(() => {
    axios
      .post(`http://localhost:5555/payment`)
      .then(() => {
        setLoading(false);
        navigate(`/PaymentSucc/${id}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

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
            onChange={(e) => setPayment(e.target.files[0])}
            className="appearance-none border border-black border-1 p-1 block mb-2 absolute top-[610px] left-[300px] w-60 h-20"
          />

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[715px] left-[300px]">
            Bank Name
          </label>
          <input
            type="text"
            onChange={handleBankNameChange}
            placeholder="Bank Name"
            className="border border-black border-1 p-1 block mb-2 absolute top-[745px] left-[300px]"
          />

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[800px] left-[300px]">
            Branch
          </label>
          <input
            type="text"
            onChange={handleBranchChange}
            placeholder="Branch"
            className="border border-black border-1 p-1 block mb-2 absolute top-[830px] left-[300px]"
          />
          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[580px] left-[900px]">
            Email Address
          </label>
          <input
            type="email"
            onChange={handleEmailChange}
            placeholder="Email Address"
            className="border border-black border-1 p-1 block mb-2 absolute top-[610px] left-[900px]"
          />

          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[715px] left-[900px]">
            Full Name
          </label>
          <input
            type="text"
            onChange={handleFullNameChange}
            placeholder="Full Name"
            className="border border-black border-1 p-1 block mb-2 absolute top-[745px] left-[900px]"
          />
          <label className="block text-ternary text-sm font-bold mb-3 absolute top-[800px] left-[900px]">
            Phone Number
          </label>
          <input
            type="number"
            onChange={handlePhoneNumberChange}
            placeholder="Phone Number"
            className="border border-black border-1 p-1 block mb-2 absolute top-[830px] left-[900px]"
          />
          <div>
            <Link to={`/PaymentSucc/${id}`}>
              <SubmitButton
                className=" absolute top-[1000px] left-[600px]"
                onClick={handleSubmit}
              >
                Confirm
              </SubmitButton>
            </Link>

            <Link to={`/Payment`}>
              <RejectButton className=" absolute top-[1000px] left-[800px]">
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
