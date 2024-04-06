import PropTypes from "prop-types";
import { MdOutlineEdit } from "react-icons/md";

const EditButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-fit h-fit justify-between p-1.5 bg-red-900 text-white rounded-md shadow-md hover:bg-red-950 transition duration-300 ease-in-out ${className}`}
    >
      <MdOutlineEdit className="text-xl ml-1" />
      <span className="mx-4">Edit</span>
    </button>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default EditButton;
