import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiFoodMenu } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import fistOffer from "../../images/firstOffer.png";
import SecondOffer from "../../images/second-offer.png";
import { useNavigate } from "react-router-dom";
import firstBlog from "../../images/first-blog.png";
import secondBlog from "../../images/second-blog.png";
import axios from "axios";
import { APP_URL } from "../../utils/Constants";
import dayjs from "dayjs";

function Offers({ products }) {
  const [blog, setBlog] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(`${APP_URL}/blog`);
        setBlog(res.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="mb-5">
      <div
        style={{
          margin: "8rem 0 ",
          backgroundColor: "#0F3C4F",
          padding: "8rem 0",
        }}
      >
        <Container className="pb-0">
          <Row className="align-items-center jsutify-content-center">
            <Col lg={4}>
              <h6
                style={{
                  width: "fit-content",
                  color: "#0F3C4F",
                  borderTop: "1px solid #E1B168",
                  borderBottom: "1px solid #E1B168",
                  color: "white",
                }}
              >
                What We Offer
              </h6>
              <h3 className="text-white">Try Our Special Offers</h3>
              <p className="text-white">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content making it
                look like readable English.{" "}
              </p>
            </Col>
            <Col lg={8}>
              <div className="d-flex gap-4">
                <div
                  style={{
                    backgroundColor: "#114359",
                    width: "257px",
                    height: "240px",
                  }}
                  className="p-4 rounded "
                >
                  <div
                    className="d-flex align-items-center rounded flex-column gap-3 justify-content-center"
                    style={{ backgroundColor: "#0F3C4F", height: "100%" }}
                  >
                    <SlCalender size={54} color="#E1B168" />
                    <h4 className="text-white">Opened 24/7</h4>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#114359",
                    width: "257px",
                    height: "240px",
                  }}
                  className="p-4 rounded "
                >
                  <div
                    className="d-flex align-items-center rounded flex-column gap-3 justify-content-center"
                    style={{ backgroundColor: "#0F3C4F", height: "100%" }}
                  >
                    <BiFoodMenu size={54} color="#E1B168" />
                    <h4 className="text-white">Special Menus</h4>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#114359",
                    width: "257px",
                    height: "240px",
                  }}
                  className="p-4 rounded "
                >
                  <div
                    className="d-flex align-items-center rounded flex-column gap-3 justify-content-center"
                    style={{ backgroundColor: "#0F3C4F", height: "100%" }}
                  >
                    <TbTruckDelivery size={54} color="#E1B168" />
                    <h3 className="text-white">Home Delivery</h3>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text-center">
        <h6
          className="mb-2 "
          style={{
            width: "fit-content",
            color: "#0F3C4F",
            margin: " 0 auto",
            borderTop: "1px solid #E1B168",
            borderBottom: "1px solid #E1B168",
          }}
        >
          Menu
        </h6>
        <h3 className="primary-color">Try Our Special Offers</h3>
        <p className="" style={{ color: "#555" }}>
          Lorem Ipsum is that it has a more-or-less normal distribution of
          <br />
          letters, as opposed to using 'Content here, content making it look
          like readable English.{" "}
        </p>

        <div className="d-flex mt-5 gap-3 container">
          <img className="w-100" src={fistOffer} alt="" />
          <img className="w-100" src={SecondOffer} alt="" />
        </div>
      </div>
      <div className="text-center">
        <h6
          className="mb-2 "
          style={{
            width: "fit-content",
            color: "#0F3C4F",
            margin: " 0 auto",
            borderTop: "1px solid #E1B168",
            borderBottom: "1px solid #E1B168",
          }}
        >
          Menu
        </h6>
        <h3 className="primary-color">Popular Dishes</h3>
        <p className="" style={{ color: "#555" }}>
          Lorem Ipsum is that it has a more-or-less normal distribution of
          <br />
          letters, as opposed to using 'Content here, content making it look
          like readable English.{" "}
        </p>

        <div className=" mt-5 gap-3 container">
          <div className=" all-prices pt-4 fw-bold   pb-5 m-auto w-100 d-flex justify-content-evenly">
            {products?.slice(3, 6).map((ele) => (
              <div
                className="col-lg-4  mt-5 col-sm-12 "
                onClick={() => navigation("/new-order", { state: ele })}
                style={{ cursor: "pointer" }}
              >
                <img src={ele?.imageUrl} style={{width:'324px' , height:'324px', objectFit:'cover'}} />
                <span>
                  <h4>{ele?.title}</h4>
                  <section className="oeganize-stars d-flex">
                    <span className="stars-divv">
                      <p className="d-flex  text-light fw-bold">
                        <del className="d-inline ">${ele?.price}</del>
                        <p style={{ color: "#0F3C4F" }}>
                          ${ele?.price * 0.8}
                        </p>{" "}
                      </p>
                      <p>{ele?.description?.slice(0, 30)}...</p>
                    </span>
                  </section>
                </span>
              </div>
            ))}
          </div>
          <button
            className="callbutton fs-4"
            style={{ width: "fit-content", color: "#555" }}
            onClick={() => navigation("/order")}
          >
            See All dished
          </button>
        </div>
      </div>

      <div className="text-center">
        <h6
          className="mb-2 "
          style={{
            width: "fit-content",
            color: "#0F3C4F",
            margin: " 0 auto",
            borderTop: "1px solid #E1B168",
            borderBottom: "1px solid #E1B168",
          }}
        >
          Menu
        </h6>
        <h3 className="primary-color">Be First Who Read News</h3>
        <p className="" style={{ color: "#555" }}>
          Lorem Ipsum is that it has a more-or-less normal distribution of
          <br />
          letters, as opposed to using 'Content here, content making it look
          like readable English.{" "}
        </p>

        <div className=" mt-5 gap-3 container">
          <div className="w-100 row ">
            {blog?.slice(0, 4).map((ele) => (
              <div
                className="col-lg-6  mb-5"
                onClick={() => navigation(`/blog/${ele?._id}`, { state: ele })}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={ele?.img}
                  style={{ height: "400px", objectFit: "cover" }}
                  className="w-100"
                />
                <div className="d-flex gap-3">
                  <h6
                    className="mb-2 mt-3 "
                    style={{
                      width: "fit-content",
                      color: "#0F3C4F",
                      borderTop: "1px solid #E1B168",
                      borderBottom: "1px solid #E1B168",
                    }}
                  >
                    {/* {ele.title} */}
                    <span>Restaurants</span>
                  </h6>{" "}
                  <h6
                    className="mb-2 mt-3 "
                    style={{
                      width: "fit-content",
                      color: "#0F3C4F",
                      borderTop: "1px solid #E1B168",
                      borderBottom: "1px solid #E1B168",
                    }}
                  >
                    {/* {ele.title} */}
                    <span>{dayjs(ele?.createAt).format("YYYY-MM-DD")}</span>
                  </h6>
                </div>
                <h4 className="primary-color " style={{ textAlign: "justify" }}>
                  {ele?.title}
                </h4>
                <p style={{ textAlign: "justify", color: "#555" }}>
                  {ele?.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
