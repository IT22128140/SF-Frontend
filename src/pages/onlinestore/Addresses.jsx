import { useEffect, useState } from "react";
import axios from "axios";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import Spinner from "../../components/Spinner";

const Addresses = () => {
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5555/deliveryDetails/65f888fbae65af39470abd22")
      .then((response) => {
        setAddresses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col items-center">
      <CustomerNavbar />

      <h1 className="text-center font-Lavish font-bold text-5xl my-8 text-primary">
        ADDRESSES
      </h1>
      <div className="flex flex-raw flex-wrap bg-bgc font-BreeSerif text-ternary w-3/4">
        {addresses.map((address) => (
          <div
            key={address._id}
            className="flex flex-col m-5 py-10 pl-5 pr-14 bg-white "
          >
            <p>
              {address.firstName}&nbsp;{address.lastName}
            </p>
            <p>
              {address.address + ","}&nbsp;
              {address.district + ","}&nbsp;
              {address.province + "."}
            </p>
            <p>{address.postalCode}</p>
            <p>{address.email}</p>
            <p>{address.contact}</p>

            
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Addresses;
