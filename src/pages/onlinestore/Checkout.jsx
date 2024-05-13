import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
import { provinces, districtsByProvince } from "../../utils/arrays.js";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

const Checkout = () => {
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

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [provinceError, setProvinceError] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");

  function validateFirstName(firstName) {
    let isValid = true;
    const nameRegex = /^[a-zA-Z]+$/;
    setFirstNameError("");
    if (!nameRegex.test(firstName)) {
      setFirstNameError("First name should contain only alphabets");
      isValid = false;
    }
    if (firstName === "") {
      setFirstNameError("First name is required");
      isValid = false;
    }
    return isValid;
  }

  function validateLastName(lastName) {
    let isValid = true;
    const nameRegex = /^[a-zA-Z]+$/;
    setLastNameError("");
    if (!nameRegex.test(lastName)) {
      setLastNameError("Last name should contain only alphabets");
      isValid = false;
    }
    if (lastName === "") {
      setLastNameError("Last name is required");
      isValid = false;
    }
    return isValid;
  }

  function validateContact(contact) {
    let isValid = true;
    const contactRegex = /^[0-9]{9}$/;
    setContactError("");
    if (!contactRegex.test(contact)) {
      setContactError("Contact number should contain only 10 digits");
      isValid = false;
    }
    if (contact === "") {
      setContactError("Contact number is required");
      isValid = false;
    }
    return isValid;
  }

  function validateEmail(email) {
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    setEmailError("");
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    }
    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    }
    return isValid;
  }

  function validateAddress(address) {
    let isValid = true;
    setAddressError("");
    if (address === "") {
      setAddressError("Address is required");
      isValid = false;
    }
    return isValid;
  }

  function validateProvince(province) {
    let isValid = true;
    setProvinceError("");
    if (province === "") {
      setProvinceError("Province is required");
      isValid = false;
    }
    return isValid;
  }

  function validateDistrict(district) {
    let isValid = true;
    setDistrictError("");
    if (district === "") {
      setDistrictError("District is required");
      isValid = false;
    }
    return isValid;
  }

  function validatePostalCode(postalCode) {
    let isValid = true;
    const postalCodeRegex = /^[0-9]{5}$/;
    setPostalCodeError("");
    if (!postalCodeRegex.test(postalCode)) {
      setPostalCodeError("Postal code should contain only 5 digits");
      isValid = false;
    }
    if (postalCode === "") {
      setPostalCodeError("Postal code is required");
      isValid = false;
    }
    return isValid;
  }

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
    event.preventDefault();
    const isValidFirstName = validateFirstName(firstName);
    const isValidLastName = validateLastName(lastName);
    const isValidContact = validateContact(contact);
    const isValidEmail = validateEmail(email);
    const isValidAddress = validateAddress(address);
    const isValidProvince = validateProvince(province);
    const isValidDistrict = validateDistrict(district);
    const isValidPostalCode = validatePostalCode(postalCode);

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidContact &&
      isValidEmail &&
      isValidAddress &&
      isValidProvince &&
      isValidDistrict &&
      isValidPostalCode
    ) {
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

      if (!id) {
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
      } else {
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
    } else {
      alert("Please fill in all the required fields");
    }
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className=" font-BreeSerif">
      <form onSubmit={handleSubmission} noValidate>
        <CustomerNavbar />
        <h1 className="text-center font-Lavish font-bold text-5xl mt-8 text-primary">
          CHECKOUT
        </h1>
        <div className="flex flex-row w-full justify-between">
          {/* Delivery details */}
          <div className="flex flex-col w-[30rem] mx-16">
            <h2 className="font-Philosopher text-2xl mb-5 font-bold text-secondary">
              Delivery Details
            </h2>
            <select
              className="h-11 ml-3 mb-5 font-BreeSerif p-2 border-gray-200 rounded-md border-2"
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

            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div>
                  <label className="ml-0.5 mb-1">First name</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {firstNameError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {firstNameError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="name"
                  value={firstName}
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col ml-10">
                <div>
                  <label className="ml-0.5 mb-1">Last name</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {lastNameError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {lastNameError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  className="h-11 p-2  border-gray-200 rounded-md border-2  shadow-sm "
                  label="Last name"
                  type="text"
                  id="name"
                  value={lastName}
                  name="name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            {/*contact*/}
            <div className="flex flex-row mt-5 justify-between">
              <div className="flex flex-col">
                <div>
                  <label className="ml-0.5 mb-1">Contact number</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {contactError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {contactError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex flex-row">
                  <p className="p-2 border-gray-200 border-2 rounded-l-md">
                    +94
                  </p>
                  <input
                    className="h-11 w-40 p-2 border-gray-200 rounded-r-md border-2  shadow-sm "
                    label="Contact number"
                    type="text"
                    id="name"
                    value={contact}
                    name="name"
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-10">
                <div>
                  <label className="ml-0.5 mb-1">Email</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {emailError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {emailError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  className="h-11 p-2  border-gray-200 rounded-md border-2  shadow-sm "
                  label="Email"
                  type="email"
                  id="name"
                  name="name"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="flex flex-row mt-5 justify-between">
              <div className="flex flex-col">
                <div>
                  <label className="ml-0.5 mb-1">Address</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {addressError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {addressError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  className="h-11 p-2  border-gray-200 rounded-md border-2  shadow-sm "
                  label="Address"
                  type="text"
                  id="name"
                  value={address}
                  name="name"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col ml-10">
                <div>
                  <label className="ml-0.5 mb-1">Postal code</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {postalCodeError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {postalCodeError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
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
            </div>
            <div className="flex flex-row mt-5 justify-between">
              <div className="flex flex-col">
                <div>
                  <label className="ml-0.5 mb-1">Province</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {provinceError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {provinceError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <select
                  className="h-11 p-2 w-[200px] mr-2 border-gray-200 rounded-md border-2  shadow-sm"
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
              </div>
              <div className="flex flex-col ml-10 ">
                <div>
                  <label className="ml-0.5 mb-1">District</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {districtError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {districtError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <select
                  className="h-11 p-2 w-52 border-gray-200 rounded-md border-2  shadow-sm"
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
            </div>
          </div>
          {/* payment details */}
          <div className="flex flex-col w-1/4 mr-8 h-fit bg-bgc p-5 rounded-lg shadow-md">
            <h2 className="font-Philosopher text-2xl font-bold text-secondary">
              Our Bank Details
            </h2>
            <p className="my-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nam
              cupiditate consequatur aspernatur suscipit adipisci aperiam! Enim
              unde maiores fuga, reiciendis eos necessitatibus quis sunt odio
              rem adipisci voluptatum ab.
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
      </form>
    </div>
  );
};

export default Checkout;
