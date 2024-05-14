import { MdOutlineCancel } from "react-icons/md";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewPayment = ({ Paymentid, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [paymentsucc, setPaymentSucc] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/payment/${Paymentid}`)
      .then((response) => {
        setPaymentSucc(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching payment details:", error);
        setLoading(false);
      });
    //sendEmail();
  }, [Paymentid]);

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
          View Payment
        </h1>
        <MdOutlineCancel
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div
          className="flex flex-col w-full items-center font-BreeSerif rounded-xl"
          id="bill"
        >
            <br />
            <div className="mb-2">
              <span className="font-bold">Total Amount:</span>
              {paymentsucc.totalpayment}
            </div>
            <div className="mb-2">
              <span className="font-bold">Email Address:</span>
              {paymentsucc.emailAddress}
            </div>
            <div className="mb-2">
              <span className="font-bold">Full Name:</span>
              {paymentsucc.fullName}
            </div>
            <div>
              <span className="font-bold">Slip Upload:</span>
              <img
                src={paymentsucc.slip}
                alt="slip"
                style={{ width: "450px", height: "auto" }}
                className="border border-black border-1 p-2 block mb-2"
              />
            </div>
            <div className="mb-2">
              <span className="font-bold">Bank Name:</span>
              {paymentsucc.bankName}
            </div>
            <div className="mb-2">
              <span className="font-bold">Phone Number:</span>
              {paymentsucc.phoneNumber}
            </div>
            <div className="mb-2">
              <span className="font-bold">Branch:</span>
              {paymentsucc.branchName}
            </div>
          </div>
        </div>
      </div>
  );
};

ViewPayment.propTypes = {
  Paymentid: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ViewPayment;
