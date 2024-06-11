import { MdDeleteOutline } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APP_URL } from "../utils/Constants";
import UniLoading from "../components/loading/Loading";
import line from "../images/Line (1).png";
import visa from "../images/visa.png";
import paypal from "../images/paypal.png";
import discover from "../images/discoverVisa.png";
import { loadStripe } from "@stripe/stripe-js";
function Checkout() {
  const navigation = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.get(`${APP_URL}/orders`);
        if (res.data) {
          setOrders(res.data);
          setLoading(false);
        }
      };
      getData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (orders?.length > 0) {
      const res = orders.reduce((acc, item) => acc + item.quantity, 0);
      const price = orders.reduce((acc, item) => acc + item.subTotal, 0);
      setAmount(res);
      setPrice(price);
    }
  }, [orders]);

  const makePaymnet = async () => {
    const stripe = await loadStripe(
      "pk_test_51NE9ReJO7nATFrqGPyPvqDwyU5w10sG1ZW4vijkPaSf92Dc8xMNzhZm2lxfHchgTVmkIdkqio0iNU4oiHhvG6Tww00Ojmt6Qe0"
    );
    const body = {
      products: orders,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(`${APP_URL}/orders/checkout`, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });

    const sesstion = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: sesstion?.id,
    });
  };

  const deleteItem = async (id) => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.delete(`${APP_URL}/orders/${id}`);
        if (res.data) {
          const newData = orders?.filter((ele) => ele?._id !== id);
          setOrders(newData);
          setLoading(false);
        }
      };
      getData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <UniLoading />
      ) : (
        <>
          <div className="py-5 container">
            <Row>
              <Col style={{ borderRight: "3px solid #1C566E" }} lg={7}>
                {orders?.map((ele) => (
                  <div className="d-flex gap-4 mb-5">
                    <img
                      style={{
                        width: "340px",
                        objectFit: "cover",
                        height: "235px",
                      }}
                      src={ele?.productID?.imageUrl}
                      alt=""
                    />
                    <div className="d-flex flex-column gap-3 position-relative ">
                      <MdDeleteOutline
                        color="red"
                        size={28}
                        onClick={() => deleteItem(ele?._id)}
                        className="position-absolute "
                        style={{
                          bottom: "1rem",
                          right: "1rem",
                          cursor: "pointer",
                        }}
                      />
                      <h1 style={{ color: "#0F3C4F" }}>
                        {ele?.productID?.title}
                      </h1>
                      <h6 style={{ color: "#0F3C4F" }} className="fw-900">
                        {ele?.productID?.type}
                      </h6>
                      <img src={line} alt="" />
                      <h4 style={{ color: "#0F3C4F" }}>
                        Quantity: {ele?.quantity}
                      </h4>
                      <h4 style={{ color: "#0F3C4F" }}>
                        Total: ${ele?.subTotal}
                      </h4>
                    </div>
                  </div>
                ))}
              </Col>
              <Col lg={5} className="position-relative">
                <div
                  style={{
                    width: "100%",
                    position: "sticky",
                    background: "#0F3C4F",
                    borderRadius: "2rem",
                    top: "2rem",
                    right: "0",
                    marginLeft: "1rem",
                  }}
                  className="p-5  text-white d-flex flex-column gap-5"
                >
                  <h4 className="text-center">
                    By Placing your order ,you agree to the{" "}
                    <span style={{ color: "#E1B168" }}>delivery terms</span>.
                  </h4>
                  <div
                    className="p-3"
                    style={{
                      backgroundColor: "#30728E50",
                      borderRadius: "1rem",
                    }}
                  >
                    <div
                      className="d-flex justify-content-between mb-3 align-items-center py-1"
                      style={{ borderBottom: "1px solid #aaa" }}
                    >
                      <h5 style={{ fontWeight: "400" }}> AMOUNT</h5>
                      <h5>{amount || 0}</h5>
                    </div>
                    <div
                      className="d-flex justify-content-between mb-3 align-items-center py-1"
                      style={{ borderBottom: "1px solid #aaa" }}
                    >
                      <h5 style={{ fontWeight: "400" }}> PRICE</h5>
                      <h5>${price || 0}</h5>
                    </div>
                    <div
                      className="d-flex justify-content-between mb-3 align-items-center py-1"
                      style={{ borderBottom: "1px solid #aaa" }}
                    >
                      <h5 style={{ fontWeight: "400" }}> DELIVERY</h5>
                      <h5>$15</h5>
                    </div>
                    <div
                      className="d-flex justify-content-between mb-3 align-items-center py-1"
                      //   style={{ borderBottom: "1px solid #aaa" }}
                    >
                      <h5 style={{ fontWeight: "400" }}> TOTAL</h5>
                      <h5>{price || 0}</h5>
                    </div>
                    <div
                      className="d-flex justify-content-between mb-3 align-items-center py-1"
                      style={{ borderBottom: "1px solid #aaa" }}
                    >
                      <h5 style={{ fontWeight: "400" }}> DISCOUNT</h5>
                      <h5>${(price * 0.05).toFixed(2) || 0}</h5>
                    </div>
                    <div className="d-flex justify-content-between  align-items-center py-1">
                      <h5 style={{ fontWeight: "400" }}> NET</h5>
                      <h5>${(price + 15 - price * 0.05).toFixed(2)}</h5>
                    </div>
                  </div>
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      textAlign: "center",
                      width: "80%",
                      margin: "0 auto",
                    }}
                    className="callbutton fs-5"
                    onClick={makePaymnet}
                  >
                    CHECKOUT
                  </a>
                  <div className="d-flex align-items-cener justify-content-between">
                    <h5>Need Help ? </h5>
                    <h5
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => navigation("/contact")}
                    >
                      Contact Us
                    </h5>
                  </div>
                  <h5 className="text-center">ACCEPT PAYMENT METHODS</h5>
                  <div className="d-flex gap-3">
                    <img src={visa} alt="" className="w-100" />
                    <img src={paypal} alt="" className="w-100" />
                    <img src={discover} alt="" className="w-100" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Checkout;
