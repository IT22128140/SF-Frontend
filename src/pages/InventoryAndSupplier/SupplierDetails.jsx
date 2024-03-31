import React from 'react';
import DeleteButton  from '../../components/Buttons/DeleteButton';
import EditButton from '../../components/Buttons/EditButton';
import AcceptButton from '../../components/Buttons/AcceptButton';
import RejectButton from '../../components/Buttons/RejectButton';
import SubmitButton from '../../components/Buttons/SubmitButton';
import ViewButton from '../../components/Buttons/ViewButton';
import AddButton from '../../components/Buttons/AddButton';


function SupplierDetails() {

  const handleDelete  = () => {
    
  };
  const handleEdit = () => {
  
};
const handleAccept = () =>{
  
};
const handleReject = () =>{
  
};
const handleSubmit = () =>{
  
};
const handleView = () =>{
  
};
const handleAdd = () =>{
  
};

  return (
    <div>SupplierDetails 

<DeleteButton  onClick={handleDelete} className="mr-2">Delete</DeleteButton >
<EditButton onClick={handleEdit} className="mr-2">Edit</EditButton>
<AcceptButton onClick={handleAccept} className="mr-2">Accept</AcceptButton>
<RejectButton onClick={handleReject} className="mr-2">Reject</RejectButton>
<SubmitButton onClick={handleSubmit} className="mr-2">Submit</SubmitButton>
<ViewButton onClick={handleView} className="mr-2">View</ViewButton>
<AddButton onClick={handleAdd} className="mr-2">Add</AddButton>

    </div>
    
  )
}

export default SupplierDetails;
