import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import TableView from '../../components/table/TableView';
import DeleteButton  from '../../components/button2/DeleteButton';
import EditButton from '../../components/button2/EditButton';
import AddButton from '../../components/button2/AddButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';


const RawMaterialStock = () => {
  const [RMStocks, setRMStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['Material id', 'Material type', 'color / design', 'quantity',''];

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

  const handleDelete  = () => {
    
  };

  const handleEdit = () => {
  
  };
  const handleAdd = () =>{
  
  };

  return (
    <div className="p-1">
      <IsNavbar RpS = {true} />
      <div className="flex items-center justify-between">
  <h1 className=" my-9 text-8xl">Raw Material Stock</h1>
</div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="min-w-full">
          <TableView headers={headers} />
          <tbody>
            {RMStocks.map((RMstock,index) => (
              <tr key={RMstock._id} className="h-8">
                 <td className="text-center border rounded-md border-slate-700">{RMstock._id}</td>
                <td className="text-center border rounded-md border-slate-700">{RMstock.materialType}</td>
                <td className="text-center border rounded-md border-slate-700">{RMstock.colorAndDesign}</td>
                <td className="text-center border rounded-md border-slate-700">{RMstock.quantity}</td>
            
                <td className="text-center border rounded-md border-slate-700"> 
                <div className="flex justify-center gap-x-4"> 
                
                <Link to={`EditRMstock/${RMstock._id}`}>
                <EditButton onClick={handleEdit} className="mr-2">Edit</EditButton> </Link> 
                
                <Link to={`DeleteRMstock/${RMstock._id}`}>
                <DeleteButton onClick={handleDelete} className="mr-2">Delete</DeleteButton > </Link>
                </div>
             </td>
           
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="AddRMaterial">
      <AddButton onClick={handleAdd} className="mr-2">Add</AddButton>


      </Link>
    </div>
  );
};

export default RawMaterialStock;