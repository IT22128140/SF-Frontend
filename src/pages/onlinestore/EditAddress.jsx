import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";
import Spinner from "../../components/Spinner";
import { provinces, districtsByProvince } from "../../utils/arrays.js";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { enqueueSnackbar } from "notistack";

const EditAddress = ({ adress, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState(adress.firstName);
  const [lastName, setLastName] = useState(adress.lastName);
  const [contact, setContact] = useState(adress.contact);
  const [email, setEmail] = useState(adress.email);
  const [address, setAddress] = useState(adress.address);
  const [province, setProvince] = useState(adress.province);
  const [district, setDistrict] = useState(adress.district);
  const [postalCode, setPostalCode] = useState(adress.postalCode);

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

  const handleEdit = () => {
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
      setLoading(true);

      const data = {
        firstName,
        lastName,
        contact,
        email,
        address,
        province,
        district,
        postalCode,
      };
      axios
        .put(`http://localhost:5555/deliveryDetails/${adress._id}`, data)
        .then(() => {
          setLoading(false);
          window.location.reload(true);
          enqueueSnackbar("Address updated", { variant: "success" });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          enqueueSnackbar("Error updating address", { variant: "error" });
        });
    } else {
      console.log("Please fill in all the required fields");
    }
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-auto bg-white rounded-xl p-4 flex flex-col relative"
      >
        <h1 className="text-3xl my-4 font-Philosopher text-center">
          Edit address
        </h1>
        <MdOutlineCancel
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        {loading ? <Spinner /> : ""}
        <form onSubmit={handleEdit} noValidate>
          <div className="flex flex-col w-full items-center font-BreeSerif rounded-xl">
            <div className="flex flex-row w-[80%] justify-between">
              <div className="flex flex-col">
                  <label className="ml-0.5 mb-1">First name</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {firstNameError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {firstNameError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  type="text"
                  id="name"
                  value={firstName}
                  name="name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                  <label className="ml-0.5 mb-1">Last name</label>
                  <AnimatePresence mode="wait" initial={false}>
                    {lastNameError && (
                      <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                        <MdError />
                        {lastNameError}
                      </motion.p>
                    )}
                  </AnimatePresence>
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
                <input
                  className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
                  label="Contact number"
                  type="text"
                  id="name"
                  value={contact}
                  name="name"
                  onChange={(e) => setContact(e.target.value)}
                />
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
                  className="h-11 p-2 w-52 border-gray-200 rounded-md border-2  shadow-sm"
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
                    Select your district
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

            <button
              className="p-4 bg-red-600 text-white m-8 w-90% font-BreeSerif rounded-md shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
              onClick={handleEdit}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditAddress.propTypes = {
  adress: PropTypes.object,
  onClose: PropTypes.func,
};

export default EditAddress;
