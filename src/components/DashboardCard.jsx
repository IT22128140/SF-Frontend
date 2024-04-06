// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddButton from "./button2/AddButton.jsx";
import ViewButton from "./button2/ViewButton.jsx";

const DashboardCard = (prop) => {
  return (
    <div className="px-14 py-8">
      <div className="border border-black rounded-xl w-[800px] h-fit flex flex-col items-center font-BreeSerif p-6">
        <h1 className="text-3xl font-Philosopher text-ternary">{prop.topic}</h1>

        <div className="border border-black rounded-xl w-[500px] h-fit flex flex-col items-center font-BreeSerif p-4 m-8">
          <h2 className="text-xl text black pb-4">{prop.subtopic1}</h2>
          <Link to={prop.link1}>
            <AddButton />
          </Link>
        </div>

        <div className="border border-black rounded-xl w-100% h-fit flex flex-col items-center font-BreeSerif p-4 m-8">
          <h2 className="text-xl text black pb-4">{prop.subtopic2}</h2>
          <p className="text-md text-black pb-4">{prop.description}</p>

          <Link to={prop.link2}>
            <ViewButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  topic: PropTypes.string,
  subtopic1: PropTypes.string,
  link1: PropTypes.string,
  subtopic2: PropTypes.string,
  description: PropTypes.string,
  link2: PropTypes.string,
};

export default DashboardCard;
