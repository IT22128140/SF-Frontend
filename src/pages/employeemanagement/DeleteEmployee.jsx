// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineCancel } from "react-icons/md";
// import BackButton from "../../components/button/BackButton.jsx";
import Spinner from "../../components/Spinner.jsx";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// , useParams
const DeleteEmployee = ({ id, onClose }) => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  // const { id } = useParams();

  // const id = employee._id;

  const handleDeleteEmployee = () => {
    setLoading(true);

    console.log(id);
    axios
      .delete(`http://localhost:5555/employee/${id}`)
      .then(() => {
        setLoading(false);
        window.location.reload(true);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      {/* <BackButton /> */}

      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-auto bg-white rounded-xl p-4 flex flex-col relative"
      >
        <h1 className="text-3xl my-4">DeleteEmployee</h1>
        <MdOutlineCancel
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col items-center border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are You Sure You Want to Delete This Employee?
          </h3>

          <button
            className="p-4 bg-red-600 text-white m-8 w-90%"
            onClick={handleDeleteEmployee}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteEmployee.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func,
};

export default DeleteEmployee;
