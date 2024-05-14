import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import ViewPayment from "../onlinestore/ViewPayment";

const Orders = () => {
  const token = sessionStorage.getItem("token");

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [date, setDate] = useState(new Date());
  const [showPayemnt, setShowPayment] = useState(false);
  const [pay, setPaymentId] = useState("");

  useEffect(() => {
    if (!token) {
      window.location = "/LoginCus";
    }
    const timer = setInterval(() => {
      setDate(new Date());
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function Completed() {
    const statuses = ["delivered", "canceled"];
    const filteredData = orders.filter((opt) =>
      statuses.some((status) => opt.status.toLowerCase().includes(status))
    );
    setCompleted("bg-bgc");
    setOngoing("");
    setFilteredData(filteredData);
  }

  function Ongoing(data) {
    const statuses = ["delivered", "canceled"];
    const filteredData = data.filter(
      (opt) =>
        !statuses.some((status) => opt.status.toLowerCase().includes(status))
    );
    setOngoing("bg-bgc");
    setCompleted("");
    setFilteredData(filteredData);
  }

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5555/order/${token}`)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        Ongoing(data);
        setLoading(false);
      })
      .catch(
        (error) => {
          console.log(error);
          setLoading(false);
          enqueueSnackbar("Error fetching orders", { variant: "error" });
        },
        [ongoing]
      );
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col">
      <CustomerNavbar />
      <div className="flex flex-row">
        <div className=" w-fit min-h-[50vh]"></div>
        <div className="flex flex-col w-full">
          <h1 className=" text-center text-5xl font-Lavish py-5 text-primary">
            ORDERS
          </h1>
          <div className="font-Philosopher text-3xl text-center">
            <button
              className={` px-5 py-1 rounded-xl text-secondary ${ongoing}`}
              onClick={() => Ongoing(orders)}
            >
              Ongoing
            </button>
            <button
              className={`px-5 py-1 rounded-xl text-secondary ml-10 ${completed}`}
              onClick={() => Completed()}
            >
              Completed
            </button>
          </div>
          <div className="mt-10">
            {filteredData.map((order) => {
              const time = new Date(order.createdAt);
              const time2 = new Date(date);

              var diff =
                (time2.getFullYear() - time.getFullYear()) * 525600 +
                (time2.getMonth() - time.getMonth()) * 43800 +
                (time2.getDate() - time.getDate()) * 1140 +
                (time2.getHours() - time.getHours()) * 60 +
                (time2.getMinutes() - time.getMinutes());

              return (
                <div
                  className=" flex justify-between font-BreeSerif mt-10 bg-bgc mx-10 p-5 rounded-xl shadow-lg"
                  key={order._id}
                >
                  <div>
                    <p className=" text-ternary">Order id : -</p>
                    <p>{order._id}</p>
                    <h1 className=" text-ternary mt-3">Placed on : - </h1>
                    <h1> {time.toDateString()}</h1>
                    <h1 className="mt-3 text-ternary">Items : -</h1>
                    {order.products.map((product) => (
                      <div key={product._id}>
                        <h1>
                          {product.name} x{product.quantity}
                        </h1>
                      </div>
                    ))}
                    <h1 className="mt-3 text-ternary">Current Progress : -</h1>
                    <h1>{order.status}</h1>
                  </div>
                  <div className="flex flex-col justify-between">
                    <button
                      onClick={() => {
                        setPaymentId(order.paymentId), setShowPayment(true);
                      }}
                      className="rounded-xl self-end text-white w-fit h-fit bg-primary hover:bg-secondary py-2 px-5"
                    >
                      View payment info
                    </button>
                    <div className="flex flex-col items-end">
                      <div className="flex flex-row mb-5">
                        <h1 className="text-ternary content-center ">
                          Total : -&nbsp;
                        </h1>
                        <h1 className="content-center"> Rs.{order.total}.00</h1>
                      </div>

                      {diff <= 120 ? (
                        <button
                          className=" rounded-xl text-white h-fit bg-red-500 hover:bg-red-600 py-2 px-4"
                          onClick={() => {
                            axios
                              .put(`http://localhost:5555/order/${order._id}`, {
                                status: "Canceled",
                              })
                              .then((res) => {
                                console.log(res);
                                enqueueSnackbar("Order Canceled", {
                                  variant: "success",
                                });
                              })
                              .catch((err) => {
                                console.log(err);
                                enqueueSnackbar("Error canceling order", {
                                  variant: "error",
                                });
                              });
                            window.location.reload();
                          }}
                        >
                          Cancel
                        </button>
                      ) : (
                        <p className=" text-red-600">
                          You cannot cancel orders after 2 hours
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=""></div>
        </div>
      </div>
      {showPayemnt && (
        <ViewPayment Paymentid={pay} onClose={() => setShowPayment(false)} />
      )}
      <Footer />
    </div>
  );
};

export default Orders;
