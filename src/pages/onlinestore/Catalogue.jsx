import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import RadioButton from "../../components/RadioButton.jsx";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import CardView from "../../components/CardView";
import { useLocation } from "react-router-dom";

const Catalogue = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const location = useLocation();
  const recievedData = location.state;

  function filterItems(e) {
    const inputValue = e.target.value.toLowerCase();
    const filteredData = items.filter((opt) =>
      opt.category.toLowerCase().includes(inputValue)
    );
    setFilteredData(filteredData);
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/items")
      .then((response) => {
        setLoading(false);
        setItems(response.data);
        if (recievedData) {
          const filteredData = response.data.filter((opt) =>
            opt.category.toLowerCase().includes(recievedData.toLowerCase())
          );
          setFilteredData(filteredData);
        } else {
          setFilteredData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [recievedData]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <CustomerNavbar />
      <div className="flex flex-row pt-8 pl-8">
        <div className=" bg-bgc w-1*4 p-5 rounded-lg shadow-lg  h-fit">
          <h1 className=" font-Lavish text-primary font-bold text-2xl">
            CATEGORIES
          </h1>
          {/* Mens */}
          <div>
            <h2 className=" font-Philosopher text-secondary text-2xl my-3">
              Mens
            </h2>
            <RadioButton
              name="check"
              value="mensshirt"
              label="Shirts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="menstshirt"
              label="T-Shirts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="menstrousers"
              label="Trousers"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="mensdenims"
              label="Denims"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="mensshorts"
              label="Shorts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="menshoodies"
              label="Hoodies"
              onChange={(e) => filterItems(e)}
            />
          </div>
          {/* Womens */}
          <div>
            <h2 className=" font-Philosopher text-secondary text-2xl my-3">
              Women
            </h2>
            <RadioButton
              name="check"
              value="womenssets"
              label="Sets"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womensdresses"
              label="Dresses"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womenstops"
              label="Tops"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womenskirts"
              label="Skirts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womenstrousers"
              label="Trousers"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="womensdenims"
              label="Denims"
              onChange={(e) => filterItems(e)}
            />
          </div>
          {/* Childrens */}
          <div>
            <h2 className=" font-Philosopher text-secondary text-2xl my-3">
              Kids
            </h2>
            <RadioButton
              name="check"
              value="kidstshirts"
              label="T-Shirts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="kidstops"
              label="Tops"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="kidshoodies"
              label="Hoodies"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="kidsshorts"
              label="Shorts"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="kidstrousers"
              label="Trousers"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="kidsdenims"
              label="Denims"
              onChange={(e) => filterItems(e)}
            />
          </div>
          {/* Unisex */}
          <div>
            <h2 className=" font-Philosopher text-secondary text-2xl my-3">
              Unisex
            </h2>
            <RadioButton
              name="check"
              value="unisextshirts"
              label="T-Shirt"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="unisexhoodies"
              label="Hoodies"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="unisextrousers"
              label="Trousers"
              onChange={(e) => filterItems(e)}
            />
            <RadioButton
              name="check"
              value="unisexdenims"
              label="Denims"
              onChange={(e) => filterItems(e)}
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap ml-10 h-fit">
          {filteredData.map((item) => (
            <CardView
              key={item._id}
              id={item._id}
              heading={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalogue;
