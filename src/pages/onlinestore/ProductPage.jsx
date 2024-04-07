import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Navbar from "../../components/navbar/CustomerNavbar.jsx";
import Input from "../../components/form/Input.jsx";
import InputNoLable from "../../components/form/InputNoLable.jsx";
import { numberValidation } from "../../utils/inputValidations.js";
import Footer from "../../components/footer/Footer.jsx";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/items/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    const cart = {
      productId: product._id,
      price: product.price,
      quantity: data.amount,
      size: data.size,
      color: data.color,
      name: product.name,
      image: product.image,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/cart/65f888fbae65af39470abd22", cart)
      .then((response) => {
        alert("Added to cart")
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding to cart");
        setLoading(false);
      });
  });

  if (loading) {
    return <Spinner />;
  }
  console.log(product.sizes);
  console.log(product);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-evenly mt-[4%] mb-[20%]">
        <img
          src={"." + product.image}
          className="rounded-l-[10px] px-16 w-1/2"
        />
        <div className="flex flex-col w-1/2">
          <h1 className=" pb-[2%] text-[1.5rem] font-Philosopher text-secondary">
            {product.name}
          </h1>
          <p className="mb-[2%] font-BreeSerif text-ternary">
            {product.description}
          </p>
          <p className="mb-[2%] font-BreeSerif text-ternary">
            Rs.{product.price}.00
          </p>
          <FormProvider {...methods}>
            <form onSubmit={(e) => e.preventDefault} noValidate>
              <div className="flex w-1/2 mt-[10%]">
                <div className="w-1/2">
                  <Input
                    formtype="input"
                    label="Amount"
                    min="1"
                    type="number"
                    id="amount"
                    name="amount"
                    {...numberValidation}
                  />
                </div>
              </div>
              <h1 className=" font-Philosopher text-secondary text-3xl mt-[10%] ">
                Select Size
              </h1>
              <div className="flex flex-row my-5 border-t-2 border-l-2 border-b-2 border-ternary align-middle w-fit">
                {product.sizes.map((size) => (
                  <div
                    key={size.id}
                    className="flex flex-row border-r-2 cursor-pointer border-ternary  shadow-xl "
                  >
                    <InputNoLable
                      formtype="input"
                      key={size.id}
                      type="radio"
                      id={size}
                      name="size"
                      value={size}
                      className="hidden peer"
                      {...numberValidation}
                    />
                    <label
                      key={size.id}
                      htmlFor={size}
                      className="cursor-pointer font-BreeSerif text-black p-2 text-center w-20 h-10 peer-checked:bg-primary peer-checked:text-white"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
              <h1 className=" font-Philosopher text-secondary text-3xl ">
                Choose Color
              </h1>
              <div className="flex flex-row my-5 border-t-2 border-l-2 border-b-2 border-ternary align-middle  w-fit">
                {product.colors.map((colors) => (
                  <div
                    key={colors.id}
                    className="flex flex-row border-r-2 cursor-pointer border-ternary  shadow-xl"
                  >
                    <InputNoLable
                      formtype="input"
                      key={colors.id}
                      type="radio"
                      id={colors}
                      name="color"
                      value={colors}
                      className="hidden peer"
                    />
                    <label
                      key={colors.id}
                      htmlFor={colors}
                      className="cursor-pointer font-BreeSerif text-black p-2 text-center w-20 h-10 peer-checked:bg-primary peer-checked:text-white"
                    >
                      {colors}
                    </label>
                  </div>
                ))}
              </div>
              <button
                onClick={onSubmit}
                className="bg-ternary text-bgc font-BreeSerif w-1/2 text-xl  p-4 rounded-[10px] shadow-xl"
              >
                Add to Cart
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;