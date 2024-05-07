import { useEffect, useState } from "react";
import axios from "axios";
import StoreNavbar from "../../components/navbar/staffheader/StoreNavbar";
import Spinner from "../../components/Spinner";
import TableView from "../../components/table/TableView";
import ViewButton from "../../components/button2/ViewButton";
import { CiSearch } from "react-icons/ci";
import ViewDeliveryDetails from "./ViewDeliveryDetails";

const OngoingOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [delivery, setDelivery] = useState({});
  const [showDelivery, setShowDelivery] = useState(false);

  const headers = [
    "Order ID",
    "Order Date",
    "Products",
    "Total Amount",
    "Delivery Details",
    "Payment Details",
    "Status",
  ];

  const filteredOptions = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filteredData = orders.filter((opt) =>
      opt._id.toLowerCase().includes(inputValue)
    );
    setKeyword(e.target.value); 
    setFilteredData(filteredData);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/order/completed")
      .then((res) => {
        setOrders(res.data);
        setFilteredData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(orders);

  return (
    <div>
      <StoreNavbar rel={true} />
      <h1 className="text-6xl my-8 font-semibold font-Philosopher text-center text-ternary">
        Completed Orders
      </h1>

      <div className="flex flex-row p-3.5 justify-center mb-5">
        <div className=" bg-primary px-5 flex text-white h-10 rounded-l-xl shadow-md">
          <CiSearch className="text-[35px] mt-0.5" />
        </div>
        <input
          className=" h-10 border-2 border-primary rounded-r-xl shadow-md focus:outline-none pl-2"
          value={keyword}
          placeholder="Search..."
          onChange={(e) => filteredOptions(e)}
        ></input>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="min-w-full font-BreeSerif">
          <TableView headers={headers} />
          <tbody>
            {filteredData.map((order) => {
              const date = new Date(order.createdAt);
              return (
                <tr key={order._id} className="h-8 font-BreeSerif">
                  <td className="border border-slate-700 text-center">
                    {order._id}
                  </td>
                  <td className="border border-slate-700 text-center">
                    {date.toDateString()}
                  </td>
                  <td className="border border-slate-700 text-center">
                    {order.products.map((product, index) => (
                      <div key={index}>
                        {product.productId} - {product.color} - {product.size} -{" "}
                        {product.quantity}
                      </div>
                    ))}
                  </td>
                  <td className="border border-slate-700 text-center">
                    Rs.{order.total}.00
                  </td>
                  <td className="border border-slate-700 ">
                    <div className="flex justify-center gap-x-4">
                    <ViewButton
                        onClick={() => {
                          setDelivery(order.deliveryDetails),
                            setShowDelivery(true);
                        }}
                      />
                    </div>
                  </td>
                  <td className="border border-slate-700 text-center">
                    <div className="flex justify-center gap-x-4">
                      <ViewButton />
                    </div>
                  </td>
                  <td className="border border-slate-700 text-center">
                  <div className="flex flex-col">
                    Current :- {order.status}
                    <select
                      className="h-11 mx-3 my-2 font-BreeSerif p-2 border-gray-200 rounded-md border-2"
                      onChange={(e) => {
                        axios
                          .put(`http://localhost:5555/order/${order._id}`, {
                            status: e.target.value,
                          })
                          .then((res) => {
                            console.log(res);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        window.location.reload();
                      }}
                    >
                      <option value="">Select status</option>
                      <option value="Not processed">Not processed</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {showDelivery && (
        <ViewDeliveryDetails
          delivery={delivery}
          onClose={() => setShowDelivery(false)}
        />
      )}
    </div>
  );
};

export default OngoingOrders;
