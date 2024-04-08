// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardView = (props) => {
  return (
    <Link to={`/ProductPage/${props.id}`} className="flex flex-col justify-around w-fit mr-10 h-fit p-5 rounded-[10px] mb-10 hover:bg-slate-100">
      <img src={props.image} className="rounded-l-[10px] w-48" />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-Philosopher text-secondary">{props.heading}</h1>
        <p className="font-BreeSerif text-ternary">{props.description}</p>
        <p className="font-BreeSerif text-ternary">Rs.{props.price}.00</p>
      </div>
    </Link>
  );
};

CardView.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default CardView;
