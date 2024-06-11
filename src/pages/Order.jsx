import React, { useEffect, useState } from "react";
import orderImg from "../images/order-img.png";
import pattern from "../images/Pattern .png";
import "../styles/Order.css";
import AppLogo from "../images/App logo.svg";
import appstore from "../images/appstore.png";
import googlePlay from "../images/googleplay.svg";
import screen01 from "../images/screen02.jpg";
import screen02 from "../images/screen01.jpg";
import screen03 from "../images/screen03.jpg";
import app2 from "../images/Group2.png";
import app3 from "../images/Group3.png";
import app4 from "../images/group4.png";
import app5 from "../images/Group5.png";
import app6 from "../images/Group6.png";
import { IoStarSharp } from "react-icons/io5";
import line from "../images/Line (1).png";
import image1 from "../images/Image (1).png";
import image2 from "../images/Image (2).png";
import image3 from "../images/Image (3).png";
import egg1 from "../images/eggg.png";
import egg2 from "../images/egg2.png";
import egg3 from "../images/egg3.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../utils/Constants";
import axios from "axios";
import UniLoading from "../components/loading/Loading";
export const Order = () => {
  const navigation = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.get(`${APP_URL}/products`);
        if (res.data) {
          setProducts(res.data);
          setLoading(false);
        }
      };
      getData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  return (
    <>
      {loading ? (
        <UniLoading />
      ) : (
        <>
          <Header />

          <section className="blogheader">
            <div className="row m-auto text-center pt-5 pb-5">
              <div className="col">
                <div className="h1">Order</div>
              </div>
            </div>
          </section>
          <section className="order">
            <div className="order-first-div">
              <img src={AppLogo} className="AppLogo w-75 " />
              <pre className="pre">50% Offer for First Order</pre>
              <h4 className="mb-4 fw-bold">Delicious Food Delivery</h4>
              <p className="fs-5">
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies innovation rather than client-centric data.
              </p>
              <div className="storeimages">
                <img src={appstore} alt="" />
                <img src={googlePlay} alt="" />
              </div>
            </div>

            <div>
              {" "}
              <img src={orderImg} className="orderImg" />
              <img src={pattern} className="pattern" />{" "}
            </div>
          </section>
          {/* */}
          <section className="mobile pt-5 ">
            <div className="mobile-content w-50 mb-4 text-light m-auto d-block text-center">
              <h3 className="fs-2 ">A simple Way to Order your Food</h3>
              <p className="mt-4">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to<br></br> using 'Content here, content
                making.
              </p>
            </div>

            <div className="  appScreens pt-4  pb-5 m-auto w-100">
              <div className="  ">
                <img src={screen01} alt="" />
              </div>
              <div className="">
                <img src={screen02} alt="" />
              </div>
              <div className="   ">
                {" "}
                <img src={screen03} alt="" />
              </div>
            </div>
          </section>

          <section className="order-via-Apps pb-5 mb-5">
            <div className="order-content pt-5 mt-5 text-center m-auto w-50 mb-5 text-dark">
              <h5>GET CONNECTED </h5>
              <h3 className="fs-1 mt-3 mb-3">Order Via App</h3>
              <p className="fs-6 pb-5 ">
                orem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to<br></br> using 'Content here, content
                making.
              </p>
            </div>
            <div className="Apps w-75 m-auto d-flex flex-wrap mb-5 justify-content-evenly ">
              <img src={AppLogo} />
              <img src={app2} />
              <img src={app3} />
            </div>
            <div className="Apps d-flex flex-wrap w-75 m-auto    mt-5 justify-content-evenly ">
              <img src={app4} />
              <img src={app5} />
              <img src={app6} />
            </div>

            <div className="button">
              {" "}
              <button
                className="fw-normal "
                onClick={() => navigation("/new-order", { state: products[0] })}
              >
                Order Now
              </button>
            </div>
          </section>

          <section className="parent-food-price-sec">
            <section className="sec-food-price-text">
              <div className="food-price w-50 mb-4 text-light m-auto d-block text-center">
                <h5 className=" ">THE MAIN FOOD</h5>
                <h2 className="mt-2">Recently Orders</h2>
              </div>
            </section>

            <section className="parent-prices pt-5 bp-5 mb-5">
              {products?.slice(0, 3).map((ele) => (
                <div
                  className="  mt-5 cursor-pointer "
                  style={{ cursor: "pointer" }}
                  onClick={() => navigation("/new-order", { state: ele })}
                >
                  <img
                    src={ele?.imageUrl}
                    className="imagee1"
                    style={{
                      width: "100%",
                      height: "324px",
                      objectFit: "cover",
                    }}
                  />
                  <span>
                    <h4 style={{ color: "white" }}>{ele?.title}</h4>
                    <img src={line} />
                    <section className="oeganize-stars d-flex">
                      <span className="stars-divv">
                        <p className="d-inline text-light fw-bold">
                          <del className="d-inline ">${ele?.price}</del> $
                          {ele?.price * 0.8}
                        </p>
                      </span>
                      <span className="stars-divv">
                        <p className="d-inline stars ">
                          {" "}
                          <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
                          <IoStarSharp />
                        </p>
                      </span>
                    </section>
                  </span>
                </div>
              ))}
            </section>
            <div className="m-auto col-lg-4 btn-sales mt-5">
              <button
                onClick={() => navigation("/new-order", { state: products[0] })}
              >
                Order Now
              </button>
            </div>
          </section>
          <section className="parent-deserts pt-5 bp-5">
            <div className="desert-price w-50 mb-4  m-auto d-block text-center">
              <h5 className=" ">MOSTLY LOVED</h5>
              <h2 className="mt-2">Frequently Orders</h2>
            </div>

            <div className=" all-prices pt-4 fw-bold   pb-5 m-auto w-100 d-flex justify-content-evenly">
              {products?.slice(3, 6).map((ele) => (
                <div
                  className="col-lg-4  mt-5 col-sm-12 "
                  onClick={() => navigation("/new-order", { state: ele })}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={ele?.imageUrl}
                    style={{
                      width: "100%",
                      height: "324px",
                      objectFit: "cover",
                    }}
                  />
                  <span>
                    <h4>{ele?.title}</h4>
                    <img src={line} />
                    <section className="oeganize-stars d-flex">
                      <span className="stars-divv">
                        <p className="d-flex  text-light fw-bold">
                          <del className="d-inline ">${ele?.price}</del>
                          <p style={{ color: "#0F3C4F" }}>
                            ${ele?.price * 0.8}
                          </p>{" "}
                        </p>
                      </span>
                      <span className="stars-divv">
                        <p className="d-inline stars ">
                          {" "}
                          <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
                          <IoStarSharp />
                        </p>
                      </span>
                    </section>
                  </span>
                </div>
              ))}
            </div>
            <div className="m-auto col-lg-4 btn-sales">
              <button
                onClick={() => navigation("/new-order", { state: products[0] })}
              >
                Order Now
              </button>
            </div>
          </section>

          <Footer />
        </>
      )}
    </>
  );
};
