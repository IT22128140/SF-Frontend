import React, { useState } from "react";
// Import the Mongoose model

const RawMaterialReport = () => {
  const [startDate, setStartDate] = useState(""); // State to store start date
  const [endDate, setEndDate] = useState(""); // State to store end date
  const [reportData, setReportData] = useState([]); // State to store report data

  // Function to fetch report data based on date range
  const fetchReportData = async () => {
    try {
      const response = await RM.find({
        restockingdate: { $gte: startDate, $lte: endDate },
      }).exec();
      setReportData(response);
    } catch (error) {
      console.error("Error fetching report data: ", error);
    }
  };

  // Function to calculate total cost
  const calculateTotalCost = (initialQuantity, costPerUnit) => {
    return initialQuantity * costPerUnit;
  };

  // JSX for rendering report
  return (
    <div className="container p-4 mx-auto">
<div className="flex items-center justify-center mb-9">
        <h1 className="my-9 text-8xl">Monthly stock report</h1>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <button
        onClick={fetchReportData}
        className="px-4 py-2 text-white bg-orange-700 rounded-md hover:bg-blue-600"
      >
        Generate Report
      </button>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Material Type</th>
            <th className="px-4 py-2 border">Color/Design</th>
            <th className="px-4 py-2 border">Available Quantity</th>
            <th className="px-4 py-2 border">Initial Quantity</th>
            <th className="px-4 py-2 border">Cost Per Unit</th>
            <th className="px-4 py-2 border">Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item) => (
            <tr key={item._id} className="border">
              <td className="px-4 py-2 border">{item.materialType}</td>
              <td className="px-4 py-2 border">{item.colorAndDesign}</td>
              <td className="px-4 py-2 border">{item.availablequantity}</td>
              <td className="px-4 py-2 border">{item.initialquantity}</td>
              <td className="px-4 py-2 border">{item.costperunit}</td>
              <td className="px-4 py-2 border">
                {calculateTotalCost(item.initialquantity, item.costperunit)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RawMaterialReport;
