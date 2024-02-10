import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

const AnimLinkButton = (props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      <Link to={props.url}>
        <button className={props.classname}>
          {props.name}
        </button>
      </Link>
    </motion.div>
  )
}

AnimLinkButton.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  classname: PropTypes.string,
}


export default AnimLinkButton