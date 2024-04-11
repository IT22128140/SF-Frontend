import React from "react"
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CustomCard1 = ({ header, description, buttonLabel, buttonClassName, buttonOnClick, className }) => {
  return (
    <div className={`m-12 bg-bgc h-60 w-96 md:w-1/4 rounded-xl hover:bg-bgc hover:scale-110 duration-700 p-5 ${className}`}>
      <h2 className="py-3 text-2xl text-ternary font-BreeSerif text-center">{header}</h2>
      <p className="text-base leading-7 text-secondary font-Philosopher space-y-4 text-center">{description}</p>
      <div className="pt-7 pb-2 flex justify-center">
        <motion.button 
          className={`w-36 h-10 font-BreeSerif rounded-md bg-primary hover:scale-90 duration-500 ${buttonClassName}`} 
          onClick={buttonOnClick}
          whileHover={{ scale: 0.8 }} 
          whileTap={{ scale: 1.0 }} 
        >
          {buttonLabel}
        </motion.button>
      </div>
    </div>
  );
};

CustomCard1.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonClassName: PropTypes.string,
  ClassName: PropTypes.string,
  buttonOnClick: PropTypes.func,
};

export default CustomCard1