import { useEffect, useState } from "react";
import axios from "axios";
import StoreNavbar from "../../components/navbar/staffheader/StoreNavbar";
import Spinner from "../../components/Spinner";
import TableView from "../../components/table/TableView";
import ViewButton from "../../components/button2/ViewButton";
import { CiSearch } from "react-icons/ci";
import ViewDeliveryDetails from "./ViewDeliveryDetails";
import ViewBill from "./ViewBill";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";
import { enqueueSnackbar } from "notistack";

const OngoingOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [delivery, setDelivery] = useState({});
  const [showDelivery, setShowDelivery] = useState(false);
  const [bill, setBill] = useState({});
  const [showBill, setShowBill] = useState(false);

  const headers = [
    "Order ID",
    "Order Date",
    "Products",
    "Total Amount",
    "Delivery Details",
    "Payment Details",
    "Bill",
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
      .get("http://localhost:5555/order/ongoing")
      .then((res) => {
        setOrders(res.data);
        setFilteredData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        enqueueSnackbar("Error fetching orders", { variant: "error" });
      });
  }, []);

  return (
    <div>
      <StoreNavbar cel={true} />
      <h1 className="text-6xl my-8 font-semibold font-Philosopher text-center text-ternary">
        Ongoing Orders
      </h1>

      <div className="flex flex-row p-3.5 justify-center mb-5">
        <div className=" bg-primary px-5 text-white h-10 rounded-l-xl shadow-md">
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
                  <td className="border border-slate-700">
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
                    <div className="flex justify-center gap-x-4">
                      <ViewButton
                        onClick={() => {
                          setBill(order), setShowBill(true);
                        }}
                      />
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
                              enqueueSnackbar("Order status updated", { variant: "success" });
                            })
                            .catch((err) => {
                              console.log(err);
                              enqueueSnackbar("Error updating order status", { variant: "error" });
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
      {showBill && <ViewBill bill={bill} onClose={() => setShowBill(false)} />}
      <StaffFooter></StaffFooter>
    </div>
  );
};

export default OngoingOrders;
