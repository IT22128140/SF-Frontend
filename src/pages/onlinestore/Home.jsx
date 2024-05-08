import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner.jsx";
import HomeSlideShow from "../../components/home/HomeSlideShow.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/navbar/CustomerNavbar.jsx";
import HorizontalScroll from "../../components/HorizontalScroll.jsx";
import Category from "../../components/home/Category.jsx";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/items/trending")
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar />
      <center>
        <div className="mt-[2%]">
          <HomeSlideShow />
        </div>
      </center>
      <h1 className="m-10 text-[40px] font-Lavish text-center text-secondary">
        New & Trending
      </h1>

      <HorizontalScroll list={items}></HorizontalScroll>

      <div className="flex flex-col">
        <div className="flex flex-row justify-evenly">
          <Category
            image="./Clothes/mens.jpg"
            heading="Male"
            link="./Catalogue"
            state={"mens"}
          />
          <Category
            image="./Clothes/womens.jpg"
            heading="Women"
            link="./Catalogue"
            state={"women"}
          />
        </div>
        <div className="flex flex-row justify-evenly">
          <Category
            image="./Clothes/unisex.jpg"
            heading="Unisex"
            link="./Catalogue"
            state={"unisex"}
          />
          <Category
            image="./Clothes/kids.jpg"
            heading="Kids"
            link="./Catalogue"
            state={"kids"}
          />
        </div>
      </div>

      <div className="flex flex-row w-screen mt-[2%]">
        <div className="flex flex-col w-1/2">
          <img src="./Picture1.jpg" alt="image" />
          <div className="flex flex-row">
            <img src="./Picture1.jpg" alt="image" className="w-1/2" />
            <img src="./Picture1.jpg" alt="image" className="w-1/2" />
          </div>
        </div>
        <img src="./Picture1.jpg" alt="image" className="w-1/2" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
