import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams,useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import Spinner from "../../components/Spinner";

const PaymentSucc = () => {
  const [paymentsucc, setPaymentSucc] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Get ID from URL parameter

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/payment/${id}`)
      .then((response) => {
        setPaymentSucc(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching payment details:", error);
        setLoading(false);
      });
  }, [id]);

  const sendEmail = () => {
    const emailPayload = {
      email: "gihanbanuka2002@gmail.com",
      subject: "Payment Successful",
      body: `This Payment is Done..!.Thank for you.

_________Product Details_________

Product id : 
Product Name : 
Product Total Price : 
Product Description :

___________________________________
Thank you..!`,
    };

    axios
      .post(`http://localhost:5555/payment/send-email`, emailPayload)
      .then((response) => {
        console.log("Email sent!");
      })
      .catch((error) => {
        console.error("Axios Error: ", error);
      });
  };

  const handlePrint = () => {
    const doc = new jsPDF();
    const img3 = new Image();
    const img4 = new Image();

    img3.src = "/Logo1.png";
    img4.src = "/Logo2.png";

    img3.onload = function(){
      doc.addImage(img4, "PNG", 10, 10, 30, 20);

      doc.addImage(img3, "PNG", 170, 10, 30, 20);
    

    doc.text("Payment Details", 80, 40);
    doc.autoTable({
      head: [["Attribute", "Value"]],
      body: [
        ["Total Amount", paymentsucc.totalpayment],
        ["Email Address", paymentsucc.emailAddress],
        ["Full Name", paymentsucc.fullName],
        ["Bank Name", paymentsucc.bankName],
        ["Phone Number", paymentsucc.phoneNumber],
        ["Branch", paymentsucc.branchName],
      ],
      startY: 50,
    });
    doc.save("payment_details.pdf");
  };
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="p-4 h-screen overflow-y-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl my-8">Payment Successful</h1>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <label className="block text-ternary text-2xl font-bold mb-2 absolute top-[220px] left-[320px] ">
              Thank you for your purchase
            </label>

            <div className="flex flex-col absolute top-[260px] left-[320px]">
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

            <br />

            <button
              className="border border-black border-1 p-2 block mb-2 absolute top-[500px] left-[320px] bg-ternary text-white rounded-lg"
              onClick={handlePrint}
            >
              Print
            </button>
            <Link to="/">
              <button className="border border-black border-1 p-2 block mb-2 absolute top-[500px] left-[470px] bg-secondary text-white rounded-lg">
                Home
              </button>
            </Link>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSucc;
