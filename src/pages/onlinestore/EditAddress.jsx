import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";
import Spinner from "../../components/Spinner";
import { provinces, districtsByProvince } from "../../utils/arrays.js";

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

  const handleEdit = () => {
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
      .put(`http://localhost:5555/deliveryDetails/${adress._id}`,data)
      .then(() => {
        setLoading(false);
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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
        <div className="flex flex-col w-full items-center font-BreeSerif rounded-xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
            <label className="ml-0.5 mb-1">First name</label>
            <input
              className="h-11 p-2 border-gray-200 rounded-md border-2  shadow-sm "
              type="text"
              id="name"
              value={firstName}
              name="name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div className="flex flex-col ml-10">
            <label className="ml-0.5 mb-1">Last name</label>
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
            <label className="ml-0.5 mb-1">Contact number</label>
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
            <label className="ml-0.5 mb-1">Email</label>
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
            <label className="ml-0.5 mb-1">Address</label>
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
            <label className="ml-0.5 mb-1">Postal code</label>
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
            <label className="ml-0.5 mb-1">Province</label>
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
            <label className="ml-0.5 mb-1">District</label>
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

          <button
            className="p-4 bg-red-600 text-white m-8 w-90% font-BreeSerif rounded-md shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
            onClick={handleEdit}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

EditAddress.propTypes = {
  adress: PropTypes.object,
  onClose: PropTypes.func,
};

export default EditAddress;
