import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoPizzaOutline } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import axios from "axios";
import { APP_URL } from "../utils/Constants";

const Booking = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [person, setperson] = useState();
  const [date, setDate] = useState();
  const [timing, setTiming] = useState();
  const [phone, setPhone] = useState();

  //validation
  const [userNameError, setUserNameError] = useState();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const notify = (msg) => toast(msg);

  const [emailError, setEmailError] = useState("");
  const [personerror, setPersonError] = useState("");
  const [timingerror, settimingError] = useState("");
  const [dateError, setDateError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handelname = (e) => {
    setUserName(e.target.value);
    if (e.target.value.length < 3) {
      setUserNameError("Username must be at least 3 characters long");
    } else {
      setUserNameError("");
    }
  };

  const handelEmail = (e) => {
    setEmail(e.target.value);
    if (!email) {
      setEmailError("please enter your email");
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("please enter  a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handeldate = (e) => {
    setDate(e.target.value);
    if (!date) {
      setDateError("please enter  date");
    } else {
      setDateError("");
    }
  };
  const handeltime = (e) => {
    setTiming(e.target.value);
    if (!timing) {
      settimingError("please enter  date");
    } else if (/[a-zA-Z]/.test(timing)) {
      settimingError(" date should be only numbers");
    } else {
      settimingError("");
    }
  };
  const handelperson = (e) => {
    setperson(e.target.value);
    if (!person) {
      setPersonError("please enter  full name");
    } else {
      setPersonError("");
    }
  };

  const handelPhone = (e) => {
    setPhone(e.target.value);
    if (!phone) {
      setPhoneError("phone number required");
    } else if (e.target.value.length !== 11) {
      setPhoneError("phone number must be 11 chars");
    }
    if (/[a-zA-Z]/.test(phone)) {
      setPhoneError("Phone number must contain only numbers");
    } else {
      setPhoneError("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((userName && person && email && phone && date, timing)) {
      try {
        setLoading(true);
        const response = await axios.post(`${APP_URL}/books`, {
          name: userName,
          email,
          phone,
          persons: person,
          date,
          time: timing,
        });

        if (response.data?._id) {
          setSent(true);
          setUserName("");
          setEmail("");
          setDate("");
          setperson("");
          setTiming("");
          setPhone("");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    } else {
      notify("All Inputs Requires");
    }
  };

  useEffect(() => {
    if (sent) {
      notify("Order Sent");
      setSent(false);
    }
  }, [sent]);

  return (
    <>
      <Header />

      <section className="blogheader">
        <div className="row m-auto text-center pt-5 pb-5">
          <div className="col">
            <div className="h1">Booking</div>
          </div>
        </div>
      </section>

      <div className="first_sec_booking">
        <div className="booking_table">
          <label className="feature_lab">R E S E R V A T I O N</label>
          <span className="book_title">Book your table now</span>
          <p className="menu_desc">
            The people, food and the prime locations make Rodich the
            <br /> perfect place good friends & family to come together and{" "}
            <br /> have great time.
          </p>

          <div className="bookingTableInputs">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={userName}
                className="inp_booking"
                onChange={handelname}
              />
              {userNameError && (
                <div style={{ color: "red" }}>{userNameError}</div>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handelEmail}
                className="inp_booking"
              />
              <br />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </div>

            <div>
              <input
                type="text"
                placeholder="phone"
                value={phone}
                onChange={handelPhone}
                className="inp_booking"
              />
              {phoneError && <div style={{ color: "red" }}>{phoneError}</div>}
            </div>

            <div>
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={handeldate}
                className="inp_booking"
              />
              <br />
              {dateError && <div style={{ color: "red" }}>{timingerror}</div>}
            </div>

            <div>
              <input
                type="time"
                placeholder="Time"
                value={timing}
                onChange={handeltime}
                className="inp_booking"
              />
              {timingerror && <div style={{ color: "red" }}>{timingerror}</div>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Person"
                value={person}
                onChange={handelperson}
                className="inp_booking"
              />
              {personerror && <div style={{ color: "red" }}>{personerror}</div>}
            </div>
          </div>
          <button
            style={{
              opacity: loading ? 0.5 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
            onClick={handleSubmit}
            className="btn_view_menu d-block mt-2"
          >
            Book a Table
          </button>
        </div>
        <div className="booking_img"></div>
      </div>

      <div className="second_sec_booking mt-5">
        <div className="best_photo"></div>
        <div className="best_desk">
          <label className="feature_lab">WHY CHOOSE US</label>
          <span className="book_title">Why We Are The Best?</span>
          <p className="menu_desc">
            Bring the table winwin survival strateges ensure proactive the
            domination the end of the day going forward new normal that has
            evolved froms generation on the runway heading towards streamlined
            cloud solution generated content in real times will have multiple
            touchpoints.
          </p>
          <ToastContainer />

          <div className="cont_labels-me">
            <div>
              <IoPizzaOutline /> <p>Fresh Food</p>
            </div>
            <div>
              <FaBusAlt />
              <p>Fast Delivery</p>
              <br />
            </div>
            <div>
              {" "}
              <IoMdCheckmarkCircleOutline />
              <p>Qualty Maintain</p>
            </div>
            <div>
              {" "}
              <FaClockRotateLeft />
              <p>24/7 Service</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Booking;
