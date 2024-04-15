// eslint-disable-next-line no-unused-vars
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AcceptButton from "../../components/button2/AcceptButton";
import RejectButton from "../../components/button2/RejectButton";

const ViewTerminationRequest = ({ request, onClose }) => {
  const navigate = useNavigate();

  const updateAcceptStatus = () => {
    let url = "";
    if (request.type === "Resign") {
      url = "/resign/ResignEmployeeList";
    } else {
      url = "/resign/FiredEmployeeList";
    }

    const data = {
      status: "Accepted",
    };

    const data2 = {
        employeeStatus: request.type === "Resign" ? "Resigned" : "Fired",
    };

    console.log(data);

    axios
      .put(`http://localhost:5555/resign/statusUpdate/${request._id}`, data)
      .then(() => {
        navigate(url);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .put(`http://localhost:5555/employeeStatus/${request.empID}`, data2)
      .catch((err) => {
        console.log(err);
      });
  };

  const updateRejectStatus = () => {
    const data = {
      status: "Rejected",
    };

    console.log(data);

    axios
      .put(`http://localhost:5555/resign/statusUpdate/${request._id}`, data)
      .then(() => {
        navigate("/resign/RejectedRequestPage");
      })
      .catch((err) => {
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
        <h2 className="text-4xl text-secondary font-Philosopher font-semibold pl-4 pt-6">
          Employee Resignation/Termination Request - <br />
          Approval or Rejection
        </h2>
        <MdOutlineCancel
          className="absolute top-2 right-6 text-3xl text-secondary cursor-pointer"
          onClick={onClose}
        />
        <div
          key={request._id}
          className="border-2 border-gray-500 rounded-lg px-4 py-2 mt-6 ml-4 mr-4 mb-4 relative hover:shadow-xl"
        >
          <div className="flex flex-col text-xl mx-4 mt-2 font-BreeSerif p-2">
            <div className="flex flex-row justify-between mb-4">
              <label className="text-ternary">Employee ID : </label>
              <input
                type="text"
                readOnly
                value={request.empID}
                className="border border-gray-500 rounded-lg text-gray-600 px-2 w-[70%]"
              />
            </div>
            <div className="flex flex-row justify-between mb-4">
              <label className="text-ternary">Full Name :</label>
              <input
                type="text"
                readOnly
                value={request.firstName + " " + request.lastName}
                className="border border-gray-500 rounded-lg text-gray-600 px-2 w-[70%]"
              />
            </div>
            <div className="flex flex-row justify-between mb-4">
              <label className="mr-4 text-ternary">Type : </label>
              <input
                type="text"
                readOnly
                value={request.type}
                className="border border-gray-500 rounded-lg text-gray-600 px-2 w-[70%]"
              />
            </div>
            <div className="flex flex-row justify-between mb-4">
              <label className="mr-4 text-ternary">Reason : </label>
              <textarea
                readOnly
                value={request.reason}
                className="border border-gray-500 rounded-lg text-gray-600 px-2 w-[70%]"
              />
            </div>
            <div className="flex flex-row justify-between mb-4">
              <label className="mr-4 text-ternary">Status : </label>
              <input
                type="text"
                readOnly
                value={request.status}
                className="border border-gray-500 rounded-lg text-gray-600 px-2 w-[70%]"
              />
            </div>
          </div>

          <div className="flex flex-row justify-evenly">
            <AcceptButton onclick={() => updateAcceptStatus()} />
            <RejectButton onclick={() => updateRejectStatus()} />
          </div>
        </div>
      </div>
    </div>
  );
};

ViewTerminationRequest.propTypes = {
  request: PropTypes.object,
  onClose: PropTypes.func,
};

export default ViewTerminationRequest;
