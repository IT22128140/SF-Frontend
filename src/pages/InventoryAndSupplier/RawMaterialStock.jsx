import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import TableView from '../../components/table/TableView';
import DeleteButton from '../../components/button2/DeleteButton';
import EditButton from '../../components/button2/EditButton';
import AddButton from '../../components/button2/AddButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import SearchBar from '../../components/SearchBar'; 
<<<<<<< HEAD
import SearchBar2 from '../../components/SearchBar2';
=======
>>>>>>> 1998b534275a592a78fa34806f5050d2d9815e99
import ReportButton from '../../components/button2/ReportButton';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const RawMaterialStock = () => {
  const [RMStocks, setRMStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate,setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
<<<<<<< HEAD
  
  const [searchResults, setSearchResults] = useState([]);
=======
  const [filteredRMStocks, setFilteredRMStocks] = useState([]); // State variable for filtered data
>>>>>>> 1998b534275a592a78fa34806f5050d2d9815e99
  const headers = ['Raw material ID','Material type', 'color / design', 'initial quantity','restocking date','available quantity','costperunit','totalcost',''];

  const headers2 = ['Material type', 'color / design', 'initial quantity','restocking date','available quantity','costperunit','totalcost'];

<<<<<<< HEAD
  
=======
  const[data,setdata] = useState([]);
>>>>>>> 1998b534275a592a78fa34806f5050d2d9815e99
  
  useEffect(() => {
    setLoading(true);
    axios
    .get('http://localhost:5555/RMstock')
    .then((response) => {
      console.log(response.data);
      setRMStocks(response.data);
      setFilteredRMStocks(response.data);
<<<<<<< HEAD
      const set = RMStocks.map(obj => ({name:obj.materialType, _id:obj._id}));
=======
      const set = RMStocks.map(obj => ({name:obj.materialID, _id:obj._id}));
>>>>>>> 1998b534275a592a78fa34806f5050d2d9815e99
        setdata(set);           
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  
  }, []);

  const handleDelete  = () => {
  
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
    doc.text('Raw material Report', 10, 10);
    doc.autoTable({
      head: [headers2],
      body: filteredRMStocks.map((RMstock) => [
        RMstock.materialType,
        RMstock.colorAndDesign,
        RMstock.initialquantity,
        RMstock.restockingdate,
        RMstock.availablequantity,
        RMstock.costperunit,
        RMstock.costperunit * RMstock.initialquantity
      ]),
    });
    doc.save('Monthly_raw_material_report.pdf');
  };
  

  return (
<<<<<<< HEAD
   
      <div className='relative'> 
        <IsNavbar RpS={true} /> 
       
        <div className="flex items-center justify-center mb-9">
          <h1 className="my-8 text-6xl font-semibold font-philosopher text-ternary alignment-center">Raw Material Stock</h1>
=======
    // <div className="absolute bg-cover h-screen p-1 overflow-y-auto bg-[url('/Picture2.jpg')] bg-transparent ">
    <div className='w-full h-full'>
   
   <div className='w-full h-full' style={{ backgroundImage: `url(/RawM.png)`, backgroundSize: 'cover' }}>
      
     </div>

    <div className='relative'> 
      <IsNavbar RpS={true} /> 
     
      <div className="flex items-center justify-center mb-9">
        <h1 className="my-8 text-6xl font-semibold font-philosopher text-ternary alignment-center">Raw Material Stock</h1>
      </div>

      <div className="flex items-center justify-center mb-4">
        <SearchBar data = {data} navigate={`/RawMaterialStock/`} placeholder={"Enter material Type"}/>
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
              {filteredRMStocks.map((RMstock,index) => (
                <tr key={RMstock._id} className="h-8">
                  <td className="text-center border rounded-md border-slate-700">{RMstock.materialID}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.materialType}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.colorAndDesign}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.initialquantity}</td> 
                  <td className="text-center border rounded-md border-slate-700">{RMstock.restockingdate}</td>
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
              ))}
            </tbody>
          </table>
>>>>>>> 1998b534275a592a78fa34806f5050d2d9815e99
        </div>
        

<<<<<<< HEAD
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
            <table className="mx-auto mb-5 bg-white font-BreeSerif">
              <TableView headers={headers} />
              <tbody>
                {searchResults.map((RMstock,index) => (
                  <tr key={RMstock._id} className="h-8">
                    <td className="text-center border rounded-md border-slate-700">{RMstock.materialID}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.materialType}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.colorAndDesign}</td>
                    <td className="text-center border rounded-md border-slate-700">{RMstock.initialquantity}</td> 
                    <td className="text-center border rounded-md border-slate-700">{RMstock.restockingdate}</td>
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
                ))}
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
    
=======
      <div className='flex justify-end m-8 mb-4'>
        <Link to="AddRMaterial">
          <AddButton onClick={handleAdd} className="mr-2">Add</AddButton>
        </Link>
      </div>
    </div>
    
    </div>
>>>>>>> 1998b534275a592a78fa34806f5050d2d9815e99
  );
};

export default RawMaterialStock;