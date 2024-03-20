// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeSlideShow from "../components/home/HomeSlideShow.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/CustomerNavbar.jsx";
import HorizontalScroll from "../components/HorizontalScroll.jsx";


const Home = () => {
  return (
    <div className="relative select-none">
      <div>
        <div>
          <Navbar />

        </div>
      </div>
      <center>
      <div className="mt-[2%] w-full ">
        <HomeSlideShow />
        </div>
        <h1 className="m-10 text-[40px] font-Lavish text-secondary">New & Trending</h1>
        <HorizontalScroll></HorizontalScroll>

      </center>

      <Footer />
    </div>
  );
};

export default Home;
