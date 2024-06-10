import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import heroImg from "../../images/hero-menu.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../../utils/Constants";
import line from "../../images/Line (1).png";

function HomMenu({ setProducts2 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.get(`${APP_URL}/products`);
        setProducts(res.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setProducts2(products);
  }, [products]);

  return (
    <>
      <Row>
        <Col lg={3}>
          <h6
            style={{
              width: "fit-content",
              color: "#0F3C4F",
              borderTop: "1px solid #E1B168",
              borderBottom: "1px solid #E1B168",
            }}
          >
            Menu
          </h6>
          <h3 className="primary-color">Try Our Special Offers</h3>
          <p className="" style={{ color: "#555" }}>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making it look
            like readable English.{" "}
          </p>
          <img src={heroImg} alt="" className="w-100" />
          <button
            className="callbutton fs-4 mt-3 "
            style={{ width: "fit-content", color: "#555" }}
            onClick={() => navigation("/order")}
          >
            View Menu
          </button>
        </Col>
        <Col lg={9}>
          <div style={{ marginLeft: "5rem" }}>
            <h3 className="primary-color mb-3">Our Products</h3>

            {products.map((ele) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigation("/new-order", { state: ele })}
                className="d-flex gap-2 align-items-center mb-5"
              >
                <img
                  src={ele?.imageUrl}
                  alt=""
                  style={{ width: "84px", height: "84px", borderRadius: "50%" }}
                />
                <div>
                  <h5 className="primary-color">{ele?.title}</h5>
                  <p style={{ color: "#555" }} className=" d-flex gap-2">
                    {ele?.description.slice(0, 35)}{" "}
                    <img style={{ objectFit: "contain" }} src={line} alt="" />
                    <h5 className="primary-color">${ele?.price}</h5>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default HomMenu;
