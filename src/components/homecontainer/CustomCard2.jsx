import React from "react"
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CustomCard2 = ({ mainHeader, subHeader1, subHeader2, description, button2Label, onButton1Click, onButton2Click, className }) => {
  return (
    <div className={`m-12 bg-orange-200 h-130 w-134.5 md:w-4/10 rounded-xl hover:bg-orange-200 duration-700 p-5 flex flex-col justify-center items-center ${className}`}>
      <h2 className="py-1 text-3xl text-ternary font-BreeSerif text-center">{mainHeader}</h2>
      <div className="m-12 bg-bgc h-20 w-96 md:w-1/4 rounded-xl hover:bg-bgc hover:scale-110 duration-700 p-5">
        <h2 className="py-0 text-2xl text-ternary font-BreeSerif text-center">{subHeader1}</h2>
        <div className="pt-0 pb-2 flex justify-center">
          <motion.button 
            className="m-1 w-5 h-5 font-BreeSerif rounded-md bg-primary hover:scale-90 duration-500 flex items-center justify-center" 
            onClick={onButton1Click}
            whileHover={{ scale: 0.8 }} 
            whileTap={{ scale: 1.0 }} 
          >
            +
          </motion.button>
        </div>
      </div>
      <div className="m-12 bg-bgc h-50 w-115 md:w-3/10 rounded-xl hover:bg-bgc hover:scale-110 duration-700 p-5">
        <h2 className="py-1 text-2xl text-ternary font-BreeSerif text-center">{subHeader2}</h2>
        <p className="text-base leading-7 text-secondary font-Philosopher space-y-4 text-center">{description}</p>
        <div className="pt-3 pb-2 flex justify-center">
          <motion.button 
            className="w-36 h-10 font-BreeSerif rounded-md bg-primary hover:scale-90 duration-500" 
            onClick={onButton2Click}
            whileHover={{ scale: 0.8 }} 
            whileTap={{ scale: 1.0 }} 
          >
            {button2Label}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

CustomCard2.propTypes = {
  mainHeader: PropTypes.string,
  subHeader1: PropTypes.string,
  subHeader2: PropTypes.string,
  description: PropTypes.string,
  button2Label: PropTypes.string,
  className: PropTypes.string,
  onButton1Click: PropTypes.func,
  onButton2Click: PropTypes.func,
};

export default CustomCard2;
