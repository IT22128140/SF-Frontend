// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CardView = (props) => {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-around w-60  rounded-[10px] border-primary border-2"
    >
      <img src={props.image} className="rounded-l-[10px]" />
      <div>
        <h1 className="pt-[2%] pb-[2%] text-[1.5rem]">{props.heading}</h1>
        <p className="mb-[2%]">{props.description}</p>
      </div>
    </motion.div>
  );
};

CardView.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default CardView;
