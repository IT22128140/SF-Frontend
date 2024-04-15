// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

const HomeOfficials = (props) => {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{  duration: 1 }}
    >
      <div>
        <img src={props.image} className=" h-[200px] w-[200px] rounded-full border-2 border-primary" />
        <h1 className="mt-[8%]">{props.position}</h1>
        <p className="mt-[5%] font[1rem] w-[30ch]">{props.description}</p>
      </div>
    </motion.div>
  );

};

HomeOfficials.propTypes = {
  image: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
};

export default HomeOfficials;
