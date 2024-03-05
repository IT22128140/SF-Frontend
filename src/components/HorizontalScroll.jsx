//import React from 'react';
import { useRef, useState } from "react";
import CardView from "../components/CardView.jsx";
import { trends } from '../utils/trends.js';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const HorizontalScroll = () => {

    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);
  
    const handleHorizantalScroll = (element, speed, distance, step) => {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
        }
        if (element.scrollLeft === 0) {
          setArrowDisable(true);
        } else {
          setArrowDisable(false);
        }
      }, speed);
    };

  return (
    <div className="flex flex-row justify-evenly">

        <button className="w-[5%]"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
        >
          <IoIosArrowDropleft className="size-10 text-secondary"/>  
        </button>
        <div className='flex overflow-hidden w-[90%] border-[5px] border-white border-r-[10px]' ref={elementRef}>
        {trends.map((tre) => (
            <CardView key={tre.id} heading={tre.heading} description={tre.des} image={tre.img}></CardView>
        ))}

      </div>
        <button className="w-[5%]"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}
        >
          <IoIosArrowDropright  className="size-10 text-secondary"/>
        </button>

    </div>
  )
}

export default HorizontalScroll