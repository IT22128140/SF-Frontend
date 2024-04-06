//import React from 'react'
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Category = (props) => {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-around items-center w-[45%]"
    >
      <img src={props.image} className="w-full mt-[10%]" />
      <h1 className="font-Lavish text-5xl m-2 text-primary ">
        {props.heading}
      </h1>
      <Link to={props.link} state={props.state}>
      <button className="bg-ternary text-bgc text-2xl font-Philosopher p-4 w-[50%]">
        Shop Now
      </button>
      </Link>
    </motion.div>
  );
};

Category.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.string,
  state: PropTypes.string,
};

export default Category;
