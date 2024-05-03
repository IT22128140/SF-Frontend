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
import ReportButton from '../../components/button2/ReportButton';// Import SearchBar component

const RawMaterialStock = () => {
  const [RMStocks, setRMStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredRMStocks, setFilteredRMStocks] = useState([]); // State variable for filtered data
  const headers = ['Material id', 'Material type', 'color / design', 'initial quantity','costperunit','restocking date','available quantity',''];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/RMstock')
      .then((response) => {
        console.log(response.data);
        setRMStocks(response.data);
        setFilteredRMStocks(response.data); // Initialize filtered data with all data
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete  = () => {
    // Implement delete functionality
  };

  const handleEdit = () => {
    // Implement edit functionality
  };

  const handleAdd = () => {
    // Implement add functionality
  };

  // Function to handle search/filtering
  const handleSearch = (searchTerm) => {
    const filteredData = RMStocks.filter((item) =>
      item.materialType.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRMStocks(filteredData);
  };

  return (
    <div className="p-1">
      <IsNavbar RpS={true} /> 
     
      <div className="flex items-center justify-center mb-9">
        <h1 className="my-9 text-8xl">Raw Material Stock</h1>
      </div>

      <div className="flex items-center justify-center mb-4">
        <SearchBar placeholder="Search by material type" onSearch={handleSearch} />
      </div>
      
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-10 mx-auto">
          <table className="w-full text-2xl">
            <TableView headers={headers} />
            <tbody>
              {filteredRMStocks.map((RMstock,index) => (
                <tr key={RMstock._id} className="h-8">
                  <td className="text-center border rounded-md border-slate-700">{RMstock.requestID}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.materialType}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.colorAndDesign}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.initialquantity}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.costperunit}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.restockingdate}</td>
                  <td className="text-center border rounded-md border-slate-700">{RMstock.availablequantity}</td>
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
        
        
        <Link to="Report"> {/* Link to AddSuppliers page */}
        <ReportButton className="mr-2">Report</ReportButton>
      </Link>
      </div>
    </div>
  );
};

export default RawMaterialStock;
