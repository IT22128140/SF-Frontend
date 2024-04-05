// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddButton from "./button2/AddButton.jsx";
import ViewButton from "./button2/ViewButton.jsx";

const DashboardCard = ( prop ) => {
  return (
    <div className="px-14 py-8">
      <div className="border border-black rounded-xl w-40% h-fit flex flex-col items-center font-BreeSerif p-6">
        <h1 className="text-3xl font-Philosopher text-ternary">
          Employee Management
        </h1>

        <div className="border border-black rounded-xl w-auto h-fit flex flex-col items-center font-BreeSerif p-4 m-8">
          <h2 className="text-xl text black pb-4">Add New Employees</h2>
          <Link to="/employees/AddEmployee">
            <AddButton />
          </Link>
        </div>

        <div className="border border-black rounded-xl w-auto h-fit flex flex-col items-center font-BreeSerif p-4 m-8">
          <h2 className="text-xl text black pb-4">
            Current Employees&rsquo; List
          </h2>
          <p className="text-md text-black pb-4">lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <Link to={prop.link2}>
                <ViewButton />
                </Link>
        </div>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
    link2: PropTypes.string,
};

export default DashboardCard;
