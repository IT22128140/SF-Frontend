// eslint-disable-next-line no-unused-vars
import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const HomeSlideShow = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <div className="h-[400px] w-full lg:h-full">
      <Fade indicators={true} >
        <div>
          <img src={images[0]} className="rounded-[10px] w-[80%] lg:w-[90%] h-[300px] lg:h-full" />
        </div>

        <div>
          <img src={images[1]} className="rounded-[10px] w-[80%] lg:w-[90%] h-[300px] lg:h-full" />
        </div>

        <div>
          <img src={images[2]} className="rounded-[10px] w-[80%] lg:w-[90%] h-[300px] lg:h-full" />
        </div>
      </Fade>
      </div>
  );
};

export default HomeSlideShow;