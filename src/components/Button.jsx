import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      type="delete"
      className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
