import PropTypes from 'prop-types';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;