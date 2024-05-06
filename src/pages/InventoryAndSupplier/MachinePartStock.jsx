import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import TableView from '../../components/table/TableView';
import DeleteButton from '../../components/button2/DeleteButton';
import EditButton from '../../components/button2/EditButton';
import AddButton from '../../components/button2/AddButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';

const MachinePartStock = () => {
  const [machineparts, setmachinepart] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['Part ID', 'Part Name', 'Purchased Date', 'Condition', 'Cost Per Unit', 'Quantity', 'Manufacturer', ''];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/MPstock')
      .then((response) => {
        setmachinepart(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = () => {};

  const handleEdit = () => {};

  const handleAdd = () => {};

  return (
    <div className="p-1">
      <IsNavbar MpS={true} />
      <div className="flex items-center justify-center mb-9">
        <h1 className="my-8 text-6xl font-semibold font-philosopher text-ternary alignment-center">Machine Part Stock</h1>
      </div>

      <div className="mb-4">
       
      </div>

      {loading ? (
        <Spinner />
      ) : ( 
        <div className="px-10 mx-auto"> 
        <table className="mx-auto mb-5 font-BreeSerif ">
          <TableView headers={headers} />
          <tbody>
            {machineparts.map((mpstock, index) => (
              <tr key={mpstock._id} className="h-8">
                <td className="text-center border rounded-md border-slate-700">{mpstock.partID}</td>
                <td className="text-center border rounded-md border-slate-700">{mpstock.partName}</td>
                <td className="text-center border rounded-md border-slate-700">{mpstock.purchasedDate}</td>
                <td className="text-center border rounded-md border-slate-700">{mpstock.condition}</td>
                <td className="text-center border rounded-md border-slate-700">{mpstock.costPerUnit}</td>
                <td className="text-center border rounded-md border-slate-700">{mpstock.quantity}</td>
                <td className="text-center border rounded-md border-slate-700">{mpstock.manufacturer}</td>
                <td className="text-center border rounded-md border-slate-700">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`EditMpart/${mpstock._id}`}>
                      <EditButton onClick={handleEdit} className="mr-2">
                        Edit
                      </EditButton>
                    </Link>
                    <Link to={`DeleteMparts/${mpstock._id}`}>
                      <DeleteButton onClick={handleDelete} className="mr-2">
                        Delete
                      </DeleteButton>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
        </div>
      )}
      <div className='flex justify-end m-8 mb-4'>
      <Link to="Addmachinepart">
          <AddButton onClick={handleAdd} >Add</AddButton>
        </Link>
        </div>
    </div>
  );
};

export default MachinePartStock;
