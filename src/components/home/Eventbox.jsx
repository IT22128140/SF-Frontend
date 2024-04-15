// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const Eventbox = () => {
  return (
    <div className="relative rounded-[1rem] mt-10 p-20 bg-secondary w-[50%] shadow-2xl">
      <h1 className=" text-[3rem]">Ongoing Events</h1>
      <p className=" mt-3 text-[1.5rem] ">See what&apos;s going on</p>
      <motion.div
        className="relative w-[5rem] h-[3rem]"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <span className="animate-ping absolute top-5 inline-flex  bg-primary rounded-[2rem] w-[5rem] h-[3rem] opacity-40"></span>
        <button className="relative top-5 text-[1.1rem] bg-primary rounded-[2rem] w-[5rem] h-[3rem] hover:bg-red-800 hover:text-white transition-colors duration-100 hover:shadow-lg">
          View
        </button>
      </motion.div>
    </div>
  );
};

export default Eventbox;
