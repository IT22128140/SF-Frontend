// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner.jsx";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import TableView from "../../components/table/TableView";
const RejectedRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = [
    "Index",
    "Employee ID",
    "First Name",
    "Last Name",
    "Type",
    "Reason",
    "Status",
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/resign/rejected")
      .then((res) => {
        setRequests(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <HrNavbar req={true} />

      <div className="p-4">
        <center>
          <h1 className="text-6xl mx-[1.75%] my-8 p-4 font-Philosopher text-ternary font-semibold">
            Rejected Termination Requests List
          </h1>
        </center>

        <div className="flex justify-center mb-10">
          {loading ? (
            <Spinner />
          ) : (
            <table className="w-[95%]">
              <TableView headers={headers} />
              <tbody>
                {requests.map((request, index) => (
                  <tr key={request._id} className="h-8">
                    <td className="border border-slate-700 rounded-md text-center">
                      {index + 1}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {request.empID}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {request.firstName}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {request.lastName}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {request.type}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {request.reason}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {request.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <StaffFooter />
    </div>
  );
};

export default RejectedRequestPage;
