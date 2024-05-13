// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import Html5QrcodePlugin from "../components/qrscanner/Html5QrcodePlugin.jsx";
import ResultContainerPlugin from "../components/qrscanner/ResultContainerPlugin.jsx";
import axios from "axios";

const QrCodeDeparture = () => {
  const [decodedResults, setDecodedResults] = useState([]);
  const [employee, setEmployee] = useState({});

  const onNewScanResult = (decodedText, decodedResult) => {
    // console.log("App [result]", decodedResult);
    setDecodedResults((prev) => [...prev, decodedResult]);
  };

  useEffect(() => {
    if (decodedResults.length > 0) {
      const lastResult = decodedResults[decodedResults.length - 1];

      axios
        .get(`http://localhost:5555/employee/${lastResult.decodedText}`)
        .then((res) => {
          console.log(res.data);
          setEmployee(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .put(`http://localhost:5555/attendance/${lastResult.decodedText}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [decodedResults]);

  return (
    <div>
      <center>
        <h1 className="text-4xl font-Philosopher text-ternary font-semibold my-8">
          Scan Your QR Code Here
        </h1>
      </center>

      <div className="flex flex-row justify-evenly h-full w-full">
        <div className="w-1/2 ">
          <Html5QrcodePlugin
            fps={1}
            qrbox={500}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>
        <ResultContainerPlugin results={employee} />
      </div>
    </div>
  );
};

export default QrCodeDeparture;
