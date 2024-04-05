import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
// import Input from "../../components/form/Input";
import { provinces } from "../../utils/arrays.js";
import { districtsByProvince } from "../../utils/arrays.js";
import { FormProvider, useForm } from "react-hook-form";
// import {
//   textValidation,
//   emailValidation,
//   contactValidation,
// } from "../../utils/inputValidations.js";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";

const Checkout = () => {
  const methods = useForm();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const totalRef = useRef(0);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [id, setId] = useState("");

  // Fetch delivery details
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/deliveryDetails/65f888fbae65af39470abd22")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // Fetch cart items
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cart/65f888fbae65af39470abd22`)
      .then((response) => {
        setCart(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  // Calculate total
  useEffect(() => {
    if (!loading) {
      let total = 0;
      cart.items.forEach((item) => {
        total += item.price * item.quantity;
      });
      totalRef.current = total;
      setTotal(total);
    }
  }, [cart, loading]);

  // Handle delivery details change
  const handleDetailChange = (e) => {
    const selectedIndex = e.target.value;
    if (selectedIndex === "") {
      setId("");
      setFirstName("");
      setLastName("");
      setContact("");
      setEmail("");
      setAddress("");
      setPostalCode("");
      setProvince("");
      setDistrict("");
    } else {
      setId(details[selectedIndex]._id);
      setFirstName(details[selectedIndex].firstName);
      setLastName(details[selectedIndex].lastName);
      setContact(details[selectedIndex].contact);
      setEmail(details[selectedIndex].email);
      setAddress(details[selectedIndex].address);
      setPostalCode(details[selectedIndex].postalCode);
      setProvince(details[selectedIndex].province);
      setDistrict(details[selectedIndex].district);
    }
  };

  function handleSubmission() {
    const deliveryDetails = {
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      email: email,
      address: address,
      province: province,
      district: district,
      postalCode: postalCode,
    };

    sessionStorage.setItem("deliveryDetails", deliveryDetails);

    if(!id) {
    axios
      .post(
        "http://localhost:5555/deliveryDetails/65f888fbae65af39470abd22",
        deliveryDetails
      )
      .then((response) => {
        console.log(response);
        alert("Order placed successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error placing order");
      });
    }
    else{
      axios
        .put(
          `http://localhost:5555/deliveryDetails/65f888fbae65af39470abd22/${id}`,
          deliveryDetails
        )
        .then((response) => {
          console.log(response);
          alert("Order placed successfully");
        })
        .catch((error) => {
          console.log(error);
          alert("Error placing order");
        });
    
    }
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <CustomerNavbar />
      <h1 className="text-center font-Lavish font-bold text-5xl mt-8 text-primary">
        CHECKOUT
      </h1>
      <div className="flex flex-row w-full justify-between">
        {/* Delivery details */}
        <div className="flex flex-col w-[30rem] mx-16">
          <FormProvider {...methods}>
            <form onSubmit={(e) => e.preventDefault} noValidate>
              <h2 className="font-Philosopher text-2xl mb-5 font-bold text-secondary">
                Delivery Details
              </h2>
              <select
                className="h-11 font-BreeSerif p-2 border-gray-200 rounded-md border-2"
                onChange={(e) => handleDetailChange(e)}
              >
                <option value="" defaultChecked>
                  Select delivery details
                </option>
                {details.map((detail, index) => (
                  <option key={index} value={index}>
                    {detail.firstName + "  " + detail.lastName}
                  </option>
                ))}
              </select>
              <div className="flex flex-row mt-5 justify-between">
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="name"
                  value={firstName}
                  name="name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  label="Last name"
                  type="text"
                  id="name"
                  value={lastName}
                  name="name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              {/*contact*/}
              <div className="flex flex-row mt-5 justify-between">
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  label="Contact number"
                  type="text"
                  id="name"
                  value={contact}
                  name="name"
                  onChange={(e) => setContact(e.target.value)}
                />
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  label="Email"
                  type="email"
                  id="name"
                  name="name"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex flex-row mt-5 justify-between">
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  label="Address"
                  type="text"
                  id="name"
                  value={address}
                  name="name"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  label="Postal code"
                  type="text"
                  id="name"
                  value={postalCode}
                  name="name"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div className="flex w-1/2 mt-5">
                <select
                  className="h-11 p-2 border-gray-200 rounded-md border-2 shadow-sm"
                  id="province"
                  value={province}
                  name="province"
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <option value="" defaultChecked hidden>
                    Select your province
                  </option>
                  {provinces.map((opt) => (
                    <option key={opt.id} value={opt.value}>
                      {opt.option}
                    </option>
                  ))}
                </select>
                <select
                  className="h-11 ml-[93px] p-2 border-gray-200 rounded-md border-2 shadow-sm"
                  id="district"
                  value={district}
                  name="district"
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={!province}
                >
                  <option value="" defaultChecked hidden>
                    Select your province
                  </option>
                  {province &&
                    districtsByProvince[province].map((opt) => (
                      <option key={opt.id} value={opt.value}>
                        {opt.option}
                      </option>
                    ))}
                </select>
              </div>
            </form>
          </FormProvider>
        </div>
        {/* payment details */}
        <div className="flex flex-col w-1/4 mr-8 h-fit bg-bgc p-5 rounded-lg shadow-md">
          <h2 className="font-Philosopher text-2xl font-bold text-secondary">
            Our Bank Details
          </h2>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nam
            cupiditate consequatur aspernatur suscipit adipisci aperiam! Enim
            unde maiores fuga, reiciendis eos necessitatibus quis sunt odio rem
            adipisci voluptatum ab.
          </p>
          <hr className="my-3 font-extrabold border-ternary border-1" />
          <div className="flex flex-row justify-between font-BreeSerif">
            <p>Total</p>
            <p className=" ">{total + 500}</p>
          </div>
          <hr className="my-3 font-extrabold border-ternary border-2" />
          <Link className="flex flex-row w-full justify-center mt-5">
            <button
              onClick={handleSubmission}
              className="bg-ternary text-bgc p-3 rounded-md font-BreeSerif shadow-lg"
            >
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
