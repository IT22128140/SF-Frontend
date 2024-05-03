// eslint-disable-next-line no-unused-vars
import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import { cover } from "../../utils/arrays.js";

const HomeSlideShow = () => {

  return (
    <div className="h-[400px] w-full lg:h-full">
      <Fade indicators={true} >
        {cover.map((image, index) => (
          <div key={index}>
            <img src={image} className="rounded-[10px] w-[80%] lg:w-[90%] h-[300px] lg:h-full" />
          </div>
        ))}
      </Fade>
      </div>
  );
};

export default HomeSlideShow;