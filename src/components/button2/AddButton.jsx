import PropTypes from "prop-types";

const AddButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between px-6 py-2 bg-orange-600 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
    >
      <span className="mr-2">{children}</span> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>



    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
};

export default AddButton;
