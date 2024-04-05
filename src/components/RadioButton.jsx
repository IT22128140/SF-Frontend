// import React from 'react'
import PropTypes from "prop-types";

const Checkbox = (props) => {
  return (
    <div className="ml-4">
        <input
        className="cursor-pointer accent-secondary"
        type="radio"
        name={props.name}
        value={props.value}
        id={props.value}
        onChange={props.onChange}
        />
        <label htmlFor={props.value} className=" ml-2 font-BreeSerif cursor-pointer text-ternary">{props.label}</label>
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
}


export default Checkbox