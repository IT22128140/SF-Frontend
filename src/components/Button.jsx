import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
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
  type: PropTypes.string, 
};

Button.defaultProps = {
  className: '',
  type: 'button', 
};

export default Button;
