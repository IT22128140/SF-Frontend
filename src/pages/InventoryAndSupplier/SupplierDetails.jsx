// SupplierDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import AddButton from '../../components/button2/AddButton';
import DeleteButton from '../../components/button2/DeleteButton';
import ViewButton from '../../components/button2/ViewButton'; 
import { Link } from 'react-router-dom';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import EditButton from '../../components/button2/EditButton';

const SupplierDetails = () => {
  const [Suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = ['Supplier ID', 'Supplier Name', 'Address', 'Contact Number', 'Email', 'Supplier Type', 'Contract Expiry', ''];

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
    
  };

  return (
    <div>
    <IsNavbar sd={true} />
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      
      <div className="flex items-center justify-center mb-9">
        <h1 className="my-8 text-6xl font-semibold font-Philosopher text-ternary alignment-center">Supplier Details</h1>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="px-10 mx-auto">
          <table className="mx-auto mb-5 bg-white font-BreeSerif ">
            <TableView headers={headers} />
            <tbody>
              {Suppliers.map((supdetails, index) => (
                <tr key={supdetails._id} className="h-8">
                  <td className="text-center border rounded-md border-slate-700">{supdetails.SrequestID}</td>
                  <td className="text-center border rounded-md border-slate-700">{supdetails.supplierName}</td>
                  <td className="text-center border rounded-md border-slate-700">{supdetails.address}</td>
                  <td className="text-center border rounded-md border-slate-700">{supdetails.contactNumber}</td>
                  <td className="text-center border rounded-md border-slate-700">{supdetails.email}</td>
                  <td className="text-center border rounded-md border-slate-700">{supdetails.supplierType}</td>
                  <td className="text-center border rounded-md border-slate-700">{supdetails.contractExpiary.split("T")[0]}</td>
                  <td className="text-center border rounded-md border-slate-700">
                    <div className="flex justify-around">
                      <Link to={`EditSuppliers/${supdetails._id}`}>
                        <EditButton>Edit</EditButton>
                      </Link>
                      <Link to={`DeleteSupplier/${supdetails._id}`}>
                        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                      </Link>
                      <Link to={`SupplieredRaws/${supdetails._id}`}> 
                        <ViewButton>Details</ViewButton>
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
        <Link to="AddSuppliers">
          <AddButton>Add</AddButton>
        </Link>
      </div>
      <StaffFooter/>
    </div></div>
  );
};

export default SupplierDetails;

