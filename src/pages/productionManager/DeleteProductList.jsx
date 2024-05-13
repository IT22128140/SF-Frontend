import React,{ useState } from 'react'
import axios from 'axios';
import PropTypes from "prop-types";
import DeleteButton from '../../components/button2/DeleteButton';
import CancelButton from '../../components/button2/CancelButton';
import { MdOutlineCancel } from "react-icons/md";

const DeleteProductList = ({id,onClose}) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteProductList = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/garmentProduct/${id}`)
      .then(() => {
        setLoading(false);
        window.location.reload(true);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  };

  return (
    <div
    className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    onClick={onClose}
    >
    {/* <BackButton /> */}

    <div
      onClick={(event) => event.stopPropagation()}
      className="w-[900px] max-w-full h-auto bg-white rounded-xl p-4 flex flex-col relative"
    >
      <h1 className="text-3xl ml-4 my-4 font-Philosopher text-ternary">Are You Sure You Want To Delete This?</h1>
      <MdOutlineCancel
        className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
        onClick={onClose}
      />
      <div className="flex flex-col rounded-xl mx-auto text-2xl font-BreeSerif">
        <div className="flex flex-row">This action cannot be undone once you click on the Delete.</div>
        <div className="flex justify-center gap-x-40 mt-2">
          <DeleteButton onClick={handleDeleteProductList}/>
          <CancelButton onClick={onClose}/>
        </div>
      </div>
    </div>
    </div>
  )
}

DeleteProductList.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func,
};

export default DeleteProductList