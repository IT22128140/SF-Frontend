// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineCancel } from "react-icons/md";
import Spinner from "../../components/Spinner.jsx";
import DeleteButton from "../../components/button2/DeleteButton.jsx";
import CancelButton from "../../components/button2/CancelButton.jsx";
import axios from "axios";

const DeleteEmployee = ({ id, onClose }) => {
  const [loading, setLoading] = useState(false);

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
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[900px] max-w-full h-auto bg-white rounded-xl p-4 flex flex-col relative"
      >
        <h1 className="text-3xl ml-4 my-4 font-Philosopher text-ternary">
          Are You Sure You Want To Delete This Employee&rsquo;s Details?
        </h1>
        <MdOutlineCancel
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col mb-6 items-start border-black rounded-xl w-[700px] p-6 mx-auto text-2xl font-BreeSerif">
          <div className="flex flex-row">
            This action{" "}
            <p style={{ color: "red" }}>&nbsp;cannot be undone&nbsp;</p> once
            you click on the Delete. <br />
          </div>
          {/* To continue, please enter the password. <br /><br />
          <label className="text-xl mr-4 text-black">Password</label>
          <input type="password" className="text-xl border border-gray-500 px-2 py-2 w-[300px] rounded-lg text-gray-500"/> */}

          <div className="flex flex-row mt-4">
            <DeleteButton onClick={handleDeleteEmployee} />
            &nbsp;&nbsp;&nbsp;
            <CancelButton onClick={onClose} />
          </div>
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
