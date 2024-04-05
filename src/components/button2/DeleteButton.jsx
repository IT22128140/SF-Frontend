import PropTypes from 'prop-types';
import { MdOutlineDelete } from 'react-icons/md';


const DeleteButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-fit h-fit justify-between p-1.5 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300 ease-in-out ${className}`}
    >
      <MdOutlineDelete className="text-xl ml-1" />
      <span className="mx-2 font-BreeSerif">Delete</span>
    </button>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default DeleteButton;
