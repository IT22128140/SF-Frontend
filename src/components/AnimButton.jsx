import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimButton = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      <button className={props.classname} onClick={props.onclick}>
        {props.name}
      </button>
    </motion.div>
  );
};

AnimButton.propTypes = {
  name: PropTypes.string,
  classname: PropTypes.string,
  onclick: PropTypes.func,
};

export default AnimButton;
