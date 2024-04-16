import { useEffect, useState } from "react";
import axios from "axios";
import StoreNavbar from "../../components/navbar/staffheader/StoreNavbar";
import Spinner from "../../components/Spinner";
import TableView from "../../components/table/TableView";

const OngoingOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const headers = [
    "Order ID",
    "Order Date",
    "Customer ID",
    "Customer Name",
    "Products",
    "Total Amount",
    "Delivery Details",
    "Payment Details",
    "Status",
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/order/ongoing")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <StoreNavbar cel={true} />
      <h1 className="text-3xl my-8">Ongoing Orders</h1>
      {loading ? (
        <Spinner />
      ) : (
        <table className="min-w-full">
          <TableView headers={headers} />
          <tbody>
            {orders.map((order) => {
              const date = new Date(order.createdAt);

              <tr key={order._id} className="h-8">
                <tr className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {order._id}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {date}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {order.customerID}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {order.products.map((product, index) => (
                      <div key={index}>
                        {product.name} - {product.color} - {product.size} -{" "}
                        {product.quantity}
                      </div>
                    ))}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {order.total}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    hhh
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    hhhhh
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {order.status}
                  </td>
                </tr>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OngoingOrders;
