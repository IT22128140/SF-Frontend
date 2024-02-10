// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarButton = (props) => {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      <Link to={props.url}>
        <div className="p-[1rem] text-white text-[20px] font-bold hover:bg-red-800 hover:text-white transition-colors duration-300 hover:scale-102">
          {props.button}
        </div>
      </Link>
    </motion.div>
  );
};

NavbarButton.propTypes = {
  button: PropTypes.String,
  url: PropTypes.String,
};

export default NavbarButton;