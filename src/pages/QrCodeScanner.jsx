// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";


const QrCodeScanner = () => {
//   const [scanResult, setScanResult] = useState(null);
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 500,
        height: 500,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      axios.get(`http://localhost:5555/employee/${result}`).then((res) => {
        setEmpData(res.data);
      });
    //   setScanResult(result);
    }

    function error(err) {
      console.log(err);
    }
  }, []);

  console.log(empData);

  return (
    <div className="">
      <center>
        <h1 className="text-4xl my-8 font-Philosopher text-ternary font-semibold">
          Scan your ID :{" "}
        </h1>

        {empData._id ? (
          <div className="text-2xl font-BreeSerif text-black mr-10">
            Success: {empData.firstName} {empData.lastName}
          </div>
        ) : (
          <div className="h-[800px] w-[800px]" id="reader"></div>
        )}
      </center>
    </div>
  );
};

export default QrCodeScanner;
