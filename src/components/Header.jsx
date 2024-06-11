import React from "react";
import footerLogo from "../images/Logo.png";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Header = () => {
  const navigation = useNavigate();
  return (
    <>
      <nav>
        <div className="row">
          <div className=" col-lg-4 col-sm-6 mt-5">
            {" "}
            <a
              style={{ cursor: "pointer", textDecoration: "none" }}
              href="https://wa.me/01003098950"
              target="_blanck"
              className="callbutton"
            >
              Call -987 654 321
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 colreservation">
            <img src={footerLogo} alt="" />
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <IoCartOutline style={{cursor:'pointer' }} onClick={() => navigation('/checkout')} className="cart text-light" />{" "}
            <button
              className="reservation-button  ms-5"
              onClick={() => navigation("/booking")}
            >
              Reservation
            </button>
          </div>
        </div>

        <div className="row navSecondDiv mt-5">
          <div className="col-lg-9 col-sm-12 ">
            <ul className=" navWords ">
              {/* <li><Link className='link' to={'/blogsingle'}>Blogsingle</Link></li> */}

              <li>
                {" "}
                <Link className="link" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to={"/about"}>
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link className="link" to={"/menu"}>
                  Menu
                </Link>
              </li>
              <li>
                {" "}
                <Link className="link" to={"/cheefs"}>
                  Cheefs
                </Link>
              </li>
              <li>
                {" "}
                <Link className="link" to={"/gallary"}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="link" to={"/blog"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="link" to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="link" to={"/booking"}>
                  Booking
                </Link>
              </li>
              <li>
                <Link className="link" to={"/order"}>
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div className=" col-lg-3 col-sm-12 iconns ">
            <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaPinterest />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
