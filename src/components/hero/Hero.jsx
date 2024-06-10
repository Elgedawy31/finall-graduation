import React from 'react'
import HeroImg from "../../images/hero.jpg";
import { useNavigate } from "react-router-dom";
function Hero() {
    const navigation = useNavigate();

  return (
    <div className=" row align-items-center">
            <div className="col-lg-6 d-flex flex-column gap-3">
              <h1 style={{ fontSize: "75px", color: "white" }}>
                Welcome to Restaurante
              </h1>
              <p style={{ color: "#DFDFDF" }}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy .
              </p>
              <button
                className="callbutton fs-4"
                style={{ width: "fit-content" }}
                onClick={() => navigation("/order")}
              >
                View Menu
              </button>
            </div>
            <div className="position-relative col-lg-6">
              <div
                style={{
                  height: "718px",
                  width: "656px",
                  borderTopLeftRadius: "50%",
                  borderTopRightRadius: "50%",
                  backgroundColor: "#ffffff10",
                }}
              ></div>
              <img
                src={HeroImg}
                style={{
                  left: "35px",
                  height: "718px",
                  width: "606px",
                  borderTopLeftRadius: "50%",
                  borderTopRightRadius: "50%",
                  position: "absolute",
                  top: "25px",
                }}
                alt=""
              />
            </div>
          </div>
  )
}

export default Hero