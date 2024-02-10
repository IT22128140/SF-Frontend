// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

const CardView = (props) => {
  return (
      <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{  duration: 1 }} className="flex flex-row justify-around w-[30%]  rounded-[10px] border-primary border-2">
        <img
          src={props.image}
          className=" rounded-l-[10px] w-[40%] mr-[2%]"
        />
        <div>
          <h1 className="pt-[2%] pb-[2%] text-[1.5rem]">{props.heading}</h1>
          <p className="mb-[2%]">
          {props.description}
          </p>
        </div>
      </motion.div>


  );
};

CardView.propTypes ={
  image: PropTypes.String,
  heading: PropTypes.String,
  description: PropTypes.String,

}

export default CardView;