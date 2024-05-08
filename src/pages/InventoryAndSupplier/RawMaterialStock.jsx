import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import TableView from '../../components/table/TableView';
import DeleteButton from '../../components/button2/DeleteButton';
import EditButton from '../../components/button2/EditButton';
import AddButton from '../../components/button2/AddButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import SearchBar2 from '../../components/SearchBar2'; 
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const RawMaterialStock = () => {
  const [RMStocks, setRMStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const headers = ['Raw material ID', 'Material type', 'color / design', 'initial quantity', 'restocking date', 'available quantity', 'costperunit', 'totalcost',''];
  
  const headers2 = ['Material type', 'color / design', 'initial quantity','restocking date','available quantity','costperunit','totalcost'];



  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/RMstock')
      .then((response) => {
        console.log(response.data);
        setRMStocks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = () => {
    
  };

  const handleEdit = () => {
    
  };

  const handleAdd = () => {
    
  };

  const handleGenerateReport = () => {
    const filteredRMStocks = RMStocks.filter((RMstock) => {
      const RMstockDate = new Date(RMstock.restockingdate);
      return RMstockDate >= new Date(startDate) && RMstockDate <= new Date(endDate);
    });
  
    const doc = new jsPDF();
    const img = new Image();
    const img2 = new Image();
    
    img.src = "/Logo1.png";
    img2.src = "/Logo2.png";

    img.onload = function (){
      
      doc.addImage(img2, "png",10,10,30,20);
      doc.addImage(img, "PNG", 160,10,30,20);
    
    doc.text('Raw material Report', 80, 20);
    doc.autoTable({
      head: [headers2],
      body: filteredRMStocks.map((RMstock) => [
        RMstock.materialType,
        RMstock.colorAndDesign,
        RMstock.initialquantity,
        RMstock.restockingdate.split("T")[0],
        RMstock.availablequantity,
        RMstock.costperunit,
        RMstock.costperunit * RMstock.initialquantity
      ]),
      startY: 50,
    });
    doc.save('Monthly_raw_material_report.pdf');
  };
}
  return (
    
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <div className='relative'> 
        <IsNavbar RpS={true} /> 
        <div className="flex items-center justify-center mb-9">
          <h1 className="my-8 text-6xl font-semibold font-philosopher text-ternary alignment-center">Raw Material Stock</h1>
        </div>
        <div className="flex items-center justify-center mb-4">
          <SearchBar2 data={RMStocks} setSearchResults={setSearchResults} />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <span className='mx-2'>to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <button className='px-4 py-2 ml-2 text-white bg-orange-700 rounded-md' onClick={handleGenerateReport}>Generate Report</button>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className="px-10 mx-auto">
            <table className="w-full text-2xl bg-white">
              <TableView headers={headers} />
              <tbody>
                {searchResults.length > 0 ? (
                  searchResults.map((RMstock, index) => (
                    <tr key={RMstock._id} className="h-8">
                    <td className="text-center border rounded-md border-slate-700">{RMstock.materialID}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.materialType}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.colorAndDesign}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.initialquantity}</td> 
                    <td className="text-center border rounded-md border-slate-700">{RMstock.restockingdate.split("T")[0]}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.availablequantity}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.costperunit}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.costperunit * RMstock.initialquantity}</td>
                    <td className="text-center border rounded-md border-slate-700"> 
                      <div className="flex justify-center gap-x-4"> 
                        <Link to={`EditRMstock/${RMstock._id}`}>
                          <EditButton onClick={handleEdit} className="mr-2">Edit</EditButton>
                        </Link> 
                        <Link to={`DeleteRMstock/${RMstock._id}`}>
                          <DeleteButton onClick={handleDelete} className="mr-2">Delete</DeleteButton >
                        </Link>
                      </div>
                      {RMstock.availablequantity < 20 && (
                        <div className="text-red-500">Low Stock</div>
                      )}
                    </td>
                    </tr>
                  ))
                ) : (
                  RMStocks.map((RMstock, index) => (
                    <tr key={RMstock._id} className="h-8">
                       <td className="text-center border rounded-md border-slate-700">{RMstock.materialID}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.materialType}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.colorAndDesign}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.initialquantity}</td> 
                    <td className="text-center border rounded-md border-slate-700">{RMstock.restockingdate.split("T")[0]}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.availablequantity}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.costperunit}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.costperunit * RMstock.initialquantity}</td>
                    <td className="text-center border rounded-md border-slate-700"> 
                      <div className="flex justify-center gap-x-4"> 
                        <Link to={`EditRMstock/${RMstock._id}`}>
                          <EditButton onClick={handleEdit} className="mr-2">Edit</EditButton>
                        </Link> 
                        <Link to={`DeleteRMstock/${RMstock._id}`}>
                          <DeleteButton onClick={handleDelete} className="mr-2">Delete</DeleteButton >
                        </Link>
                      </div>
                      {RMstock.availablequantity < 20 && (
                        <div className="text-red-500">Low Stock</div>
                      )}
                    </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className='flex justify-end m-8 mb-4'>
          <Link to="AddRMaterial">
            <AddButton onClick={handleAdd} className="mr-2">Add</AddButton>
          </Link>
        </div>
      </div>
      <StaffFooter/>
    </div>
  );
};

export default RawMaterialStock;
