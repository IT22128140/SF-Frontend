// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeSlideShow from "../components/home/HomeSlideShow.jsx";
import Eventbox from "../components/home/Eventbox.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/CustomerNavbar.jsx"


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

        <Eventbox />
      </center>

      <Footer />
    </div>
  );
};

export default Home;
