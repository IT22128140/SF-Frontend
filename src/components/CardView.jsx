// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const CardView = (props) => {
  return (
    <div className="flex flex-col justify-around w-60 mr-10 rounded-[10px] ">
      <img src={props.image} className="rounded-l-[10px]" />
      <div>
        <h1 className="pt-[2%] pb-[2%] text-[1.5rem] font-Philosopher text-secondary">{props.heading}</h1>
        <p className="mb-[2%] font-BreeSerif text-ternary">{props.description}</p>
      </div>
    </div>
  );
};

CardView.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default CardView;
