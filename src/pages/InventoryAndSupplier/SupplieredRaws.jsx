import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import AddButton from '../../components/button2/AddButton';
import DeleteButton from '../../components/button2/DeleteButton';
import { Link } from 'react-router-dom';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';


const SupplieredRaws = () => {
  const [SuppRaws, setSuppRaws] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = ['Supplier ID', 'fabricType_Colour_Quantity', 'button_Colour_Quantity', 'thread_Colour_Quantity', 'other_Materials', 'recivedDate', ''];

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/suppRM`)
      .then((response) => {
        console.log(response.data);
        setSuppRaws(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = () => {
    // Implement delete functionality
  };

  const handleEdit = () => {
    // Implement edit functionality
  };

  return (
  <div className="p-1">
      <IsNavbar sd = {true} />
      <div className="flex items-center justify-center mb-9">
        <h1 className="my-9 text-8xl "> Raw materials supplied</h1>
      </div>

    
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-10 mx-auto"> 
        <table className="w-full text-2xl">
          <TableView headers={headers} />
          <tbody>
            {SuppRaws.map((SuppRaw, index) => (
              <tr key={SuppRaw._id} className="h-8">
                <td className="text-center border rounded-md border-slate-700">{SuppRaw.supplierID}</td>
                <td className="text-center border rounded-md border-slate-700">{SuppRaw.fabricType_Colour_Quantity}</td>
                <td className="text-center border rounded-md border-slate-700">{SuppRaw.button_Colour_Quantity}</td>
                <td className="text-center border rounded-md border-slate-700">{SuppRaw.thread_Colour_Quantity}</td>
                <td className="text-center border rounded-md border-slate-700">{SuppRaw.other_Materials}</td>
                <td className="text-center border rounded-md border-slate-700">{SuppRaw.recivedDate}</td>
                <td className="text-center border rounded-md border-slate-700">
                  <div className="flex justify-around">
                   
                    <Link to={`DeletesupDetails/${SuppRaw._id}`}>
                      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )};
      <div className='flex justify-end m-8 mb-4'>
      <Link to="AddSupplieredRaws"> {/* Link to AddSuppliers page */}
        <AddButton className="mr-2">Add</AddButton>
      </Link>
     
      </div>
    </div>
  );
};

export default SupplieredRaws;
