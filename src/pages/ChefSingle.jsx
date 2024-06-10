import React from "react";
import man1 from "../images/aboutman1.png";
import { IoBagRemoveSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import "../styles/Singlechef.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const ChefSingle = () => {
  return (
    <div>
      <Header />
      <section className="singleCheif">
        <section className="single1">
          <img src={man1} />
        </section>
        <section className="single2">
          <h2>Evan Mathew</h2>
          <h4>Master Chef</h4>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divid with additional
            clickthroughs from Nanotechnology immersion along the information
            highway will close the loop on focusing solely the bottom line.
          </p>
          <div className="single-grid-divs">
            <div>
              <p className="singlle">
                <IoBagRemoveSharp />
              </p>
              <span>
                <h5>Experience</h5>
                <p>10 years of Experience</p>
              </span>
            </div>

            <div>
              <p className="singlle">
                <IoMdMail />
              </p>
              <span>
                <h5>Mail</h5>
                <p>Evanmathew@gmail.com</p>
              </span>
            </div>

            <div>
              <p className="singlle">
                <IoCall />
              </p>
              <span>
                <h5>Contact Us</h5>
                <p>800-234-567</p>
              </span>
            </div>

            <div>
              <p className="singlle">
                <CiLocationOn />
              </p>
              <span>
                <h5>Locate Us</h5>
                <p>
                  Riverside 25, San Francisco, California Mon To Fri 9:00 AM -
                  9:00 PM
                </p>
              </span>
            </div>
          </div>
          <div className="singleChefIcons">
            <p>
              {" "}
              <FaInstagram />
            </p>
            <p>
              {" "}
              <FaFacebook />
            </p>
            <p>
              {" "}
              <FaTwitter />
            </p>
            <p>
              {" "}
              <FaPinterest />
            </p>
          </div>
        </section>
      </section>
      {/* second ---------- */}
      <section className="single-position-parent">
        <h4>PROMO</h4>
        <h1>My promo video</h1>
        <div className="positionimg"> </div>

        <Footer />
      </section>
    </div>
  );
};
