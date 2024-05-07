import React, { useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { useParams, useNavigate } from "react-router-dom";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";
import DeleteButton from "../../components/button2/DeleteButton";

const DeleteSalary = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/salary/${id}`)
      .then((response) => {
        setLoading(false);
        navigate("/salaryhistory");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="w-full h-full bg-scroll bg-repeat bg-bgimg">
      <HrNavbar sal={true} />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-orange-100 text-black p-5 rounded-lg w-96">
          <h2 className="text-xl font-bold text-primary">Delete Salary</h2>
          <br />
          <p>Are you sure you want to delete this employee's salary details?</p>
          <br />
          <p className="font-bold">
            This action cannot be undone once you click on Confirm.
          </p>
          {loading ? <Spinner /> : ""}
          <div className="mt-4 flex justify-center space-x-16">
            <button
              className="bg-black p-2 rounded text-white"
              onClick={() => navigate(`/ViewSalary/${id}`)}
            >
              Cancel
            </button>
            <DeleteButton onClick={handleDelete}>Confirm</DeleteButton>
          </div>
        </div>
      </div>
      <StaffFooter />
    </div>
  );
};

export default DeleteSalary;
