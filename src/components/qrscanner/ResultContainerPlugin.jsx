// eslint-disable-next-line no-unused-vars
// import { useEffect, useState } from "react";
// import axios from "axios";

// function filterResults(results) {

// let filteredResults = [];
// for (var i = 0; i < results.length; ++i) {
//   if (i === 0) {
//     filteredResults.push(results[i]);
//     continue;
//   }

//   if (results[i].decodedText !== results[i - 1].decodedText) {
//     filteredResults.push(results[i]);
//   }
// }
// return filteredResults;
// }

// const ResultContainerTable = ({ data }) => {
//   const results = filterResults(data);
//   return (
//     // <table className={"Qrcode-result-table"}>
//     //   <thead>
//     //     <tr>
//     //       <td>#</td>
//     //       <td>Decoded Text</td>
//     //       <td>Format</td>
//     //     </tr>
//     //   </thead>
//     //   <tbody>
//     //     {results.map((result, i) => {
//     //       console.log(result);

//     //       return (
//     //         <tr key={i}>
//     //           <td>{i}</td>
//     //           <td>{result.decodedText}</td>
//     //           <td>{result.result.format.formatName}</td>
//     //         </tr>
//     //       );
//     //     })}
//     //   </tbody>
//     // </table>
//   );
// };

const ResultContainerPlugin = (results) => {
  console.log(results);
  console.log(results.results);
  // const results = filterResults(props.results);
  return (
    <div className="font-BreeSerif">
      <div className="text-3xl text-ternary mb-4">Scanned Results</div>
      {/* <div className="Result-header">Scanned results ({results.length})</div> */}
      <div className="text-xl">
        <table className="border-collapse border border-slate-500 border-spacing-0 table-auto md:table-fixed">
          <tbody>
            <tr>
              <td className="border border-slate-700">Employee ID</td>
              <td className="border border-slate-700 text-gray-700">
                {results.results.employeeID}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700">Full Name</td>
              <td className="border border-slate-700 text-gray-700">
                {results.results.firstName} {results.results.lastName}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700">Occupation</td>
              <td className="border border-slate-700 text-gray-700">
                {results.results.occupation}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700">NIC No</td>
              <td className="border border-slate-700 text-gray-700">
                {results.results.nic}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700">Email</td>
              <td className="border border-slate-700 text-gray-700">
                {results.results.email}
              </td>
            </tr>
          </tbody>
        </table>
        {/* <ResultContainerTable data={results} /> */}
      </div>
    </div>
  );
};

export default ResultContainerPlugin;
