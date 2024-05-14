import { useEffect, useState } from "react";
import axios from "axios";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import Spinner from "../../components/Spinner";
import DeleteButton from "../../components/button2/DeleteButton";
import EditButton from "../../components/button2/EditButton";
import DeleteAddress from "./DeleteAddress";
import EditAddress from "./EditAddress";

const Addresses = () => {
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState(null);
  const [adress, setAdress] = useState(null);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location = "/LoginCus";
    }
    setLoading(true);

    axios
      .get(`http://localhost:5555/deliveryDetails/${token}`)
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
    <div>
      <CustomerNavbar />
      <h1 className="text-center font-Lavish font-bold text-5xl my-8 text-primary">
        ADDRESSES
      </h1>
      <div className=" flex flex-col items-center w-full">
        <div className="flex flex-row flex-wrap pb-7 md:pb-8 2xl:pb-9 bg-bgc font-BreeSerif text-ternary w-3/4 rounded-md">
          {addresses.map((address) => (
            <div
              key={address._id}
              className="flex flex-col mt-7 ml-7 md:ml-8 md:mt-8 2xl:mt-9 2xl:ml-9 pt-3 pb-16 pl-5 pr-14 bg-white rounded-md"
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

              <EditButton
                onClick={() => {
                  setAdress(address), setShowEdit(true);
                }}
                className={"absolute translate-x-[192px] translate-y-[135px]"}
              />

              <DeleteButton
                onClick={() => {
                  setId(address._id), setShowDelete(true);
                }}
                className={" absolute translate-x-[300px] translate-y-[135px]"}
              />
            </div>
          ))}
        </div>
      </div>
      {showDelete && (
        <DeleteAddress id={id} onClose={() => setShowDelete(false)} />
      )}
      {showEdit && (
        <EditAddress adress={adress} onClose={() => setShowEdit(false)} />
      )}
      <Footer />
    </div>
  );
};

export default Addresses;
