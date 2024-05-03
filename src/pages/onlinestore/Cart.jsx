import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const totalRef = useRef(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cart/65f888fbae65af39470abd22`)
      .then((response) => {
        setCart(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      let total = 0;
      cart.items.forEach((item) => {
        total += item.price * item.quantity;
      });
      totalRef.current = total;
      setTotal(total);
    }
  }, [cart, loading]);

  const handleMinus = (id) => {
    setLoading(true);
    axios
      .put(`http://localhost:5555/cart/minus/65f888fbae65af39470abd22/${id}`)
      .then(() => {
        window.location.reload(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  const handlePlus = (id) => {
    setLoading(true);
    axios
      .put(`http://localhost:5555/cart/plus/65f888fbae65af39470abd22/${id}`)
      .then(() => {
        window.location.reload(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    setLoading(true);
    axios
      .put(`http://localhost:5555/cart/65f888fbae65af39470abd22/${id}`)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    window.location.reload(false);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col w-full">
      <CustomerNavbar />
      <h1 className="text-center font-Lavish font-bold text-5xl mt-8 text-primary">
        CART
      </h1>
      <div className="flex flex-row justify-between">
        {/* cart items */}
        <div className="flex flex-col w-3/4 ">
          {cart.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-row mx-8 my-5 justify-between mr-32 h-32 items-center rounded-lg p-5 shadow-md"
            >
              {/* description */}
              <div className="flex flex-row">
                <img src={"." + item.image} className="w-20 h-20" />
                <div className="flex flex-col ml-3 ">
                  <p className=" font-BreeSerif">{item.name}</p>
                  <div className="flex flex-row  font-BreeSerif">
                    <p>Size :&nbsp;</p>
                    <p>{item.size}</p>
                  </div>
                  <div className="flex flex-row  font-BreeSerif">
                    <p>Color :&nbsp;</p>
                    <p className=" font-BreeSerif">{item.color}</p>
                  </div>
                </div>
              </div>
              {/* amount */}
              <div className="flex justify-evenly w-32 h-8">
                <button onClick={() => handleMinus(item._id)}>
                  <FiMinusCircle className=" text-3xl text-ternary" />
                </button>
                <p className=" font-BreeSerifc border-2 p-0.5 px-2 mx-3 border-ternary">
                  {item.quantity}
                </p>
                <button onClick={() => handlePlus(item._id)}>
                  <FiPlusCircle className="text-3xl text-ternary" />
                </button>
              </div>
              <p className=" font-BreeSerif">{"Rs." + item.price + ".00"}</p>
              <button
                className="text-red-600"
                onClick={() => handleDelete(item._id)}
              >
                <MdOutlineDelete className=" text-3xl" />
              </button>
            </div>
          ))}
        </div>
        {/* order summary */}
        <div className="flex flex-col w-1/4 mr-8 bg-bgc p-5 rounded-lg shadow-md">
          <h1 className=" font-Philosopher text-2xl mb-5 font-bold text-secondary">
            Order Summary
          </h1>
          <div className="flex flex-row justify-between mb-2 font-BreeSerif">
            <p>Sub Total</p>
            <p className=" ">{total}</p>
          </div>
          <div className="flex flex-row justify-between mb-2 font-BreeSerif">
            <p>Sipping Fee</p>
            <p className=" ">500</p>
          </div>
          <hr className="my-3 font-extrabold border-ternary border-1" />
          <div className="flex flex-row justify-between font-BreeSerif">
            <p>Total</p>
            <p className=" ">{total + 500}</p>
          </div>
          <hr className="my-3 font-extrabold border-ternary border-2" />
          {cart.items.length > 0 && (
            <Link to="/Checkout" className="flex flex-row w-full justify-center">
              <button className="bg-ternary text-bgc p-3 rounded-md font-BreeSerif shadow-lg">
                Proceed to Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
