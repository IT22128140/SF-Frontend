import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import AddButton from '../../components/button2/AddButton';
import DeleteButton from '../../components/button2/DeleteButton';
import EditButton from '../../components/button2/EditButton';
import { Link } from 'react-router-dom';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';

const SupplierDetails = () => {
  const [Suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = ['Supplier ID', 'Supplier Name', 'Address', 'Contact Number', 'Email', 'Supplier Type', 'Contract Expiry',''];

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/supdetails`)
      .then((response) => {
        console.log(response.data);
        setSuppliers(response.data);
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
      <div className="flex items-center justify-between">
        <h1 className="my-9 text-8xl">Supplier Details</h1>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="min-w-full">
          <TableView headers={headers} />
          <tbody>
            {Suppliers.map((supdetails, index) => (
              <tr key={supdetails._id} className="h-8">
                <td className="text-center border rounded-md border-slate-700">{supdetails._id}</td>
                <td className="text-center border rounded-md border-slate-700">{supdetails.supplierName}</td>
                <td className="text-center border rounded-md border-slate-700">{supdetails.address}</td>
                <td className="text-center border rounded-md border-slate-700">{supdetails.contactNumber}</td>
                <td className="text-center border rounded-md border-slate-700">{supdetails.email}</td>
                <td className="text-center border rounded-md border-slate-700">{supdetails.supplierType}</td>
                <td className="text-center border rounded-md border-slate-700">{supdetails.contractExpiary}</td>
                <td className="text-center border rounded-md border-slate-700">
                  <div className="flex justify-around">
                    <Link to={`EditSuppliers/${supdetails._id}`}>
                      <EditButton onClick={handleEdit}>Edit</EditButton>
                    </Link>
                    <Link to={`DeleteSupplier/${supdetails._id}`}>
                      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="AddSuppliers"> {/* Link to AddSuppliers page */}
        <AddButton className="mr-2">Add</AddButton>
      </Link>
    </div>
  );
};

export default SupplierDetails;
