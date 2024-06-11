import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import imgTwo from "../images/blog-img-2.png";
import imgThree from "../images/blog-img3.png";
import imgFour from "../images/blog-img-4.png";
// import subTitle from '../images/Sub Title.png'
import subTitle2 from "../images/SubTitle.png";
import blogSubTitle from "../images/blog-sub-title.png";
import image1 from "../images/01.png";
import image2 from "../images/02.png";
import image3 from "../images/03.png";
import image4 from "../images/04.png";
import image5 from "../images/05.png";
import image6 from "../images/06.png";
import "../styles/Blog.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { APP_URL } from "../utils/Constants";
import UniLoading from "../components/loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [person, setperson] = useState();
  const [date, setDate] = useState();
  const [timing, setTiming] = useState();
  const [result, setResult] = useState([]);
  const notify = (msg) => toast(msg);

  const [userNameError, setUserNameError] = useState();
  const [emailError, setEmailError] = useState("");
  const [personerror, setPersonError] = useState("");
  const [timingerror, settimingError] = useState("");
  const [dateError, setDateError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const navigation = useNavigate();
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

  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.get(`${APP_URL}/blog`);
        if (res.data) {
          setResult(res.data);
          setLoading(false);
        }
      };
      getData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((userName && person && email && date, timing)) {
      try {
        const response = await axios.post(`${APP_URL}/books`, {
          name: userName,
          email,
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
        }
      } catch (error) {
        console.log(error);
      } finally {
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
      {loading ? (
        <UniLoading />
      ) : (
        <>
          <Header />
          <section className="blogheader">
            <div className="row m-auto text-center pt-5 pb-5">
              <div className="col">
                <div className="h1">Blog</div>
              </div>
            </div>
          </section>
          <Container className=" container p-3 ">
            <div className="row w-75 m-auto">
              <div className="col-lg-8 blog-text">
                <img src={blogSubTitle} style={{ height: "30px" }} />
                <h1>Be FIrst Who Read News</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, vitae molestiae minus excepturi, hic eligendi
                  quidem quia nisi deserunt, ad quaerat illum modi consequatur?
                  Quae cum unde blanditiis magni ut?
                </p>
              </div>
            </div>

            <div className="row mb-4  m-auto ">
              {result?.map((e) => (
                <div key={e?._id} className="col-lg-6 col-sm-12 py-2">
                  <img
                    onClick={() => navigation(`/blog/${e?._id}`)}
                    alt="img"
                    className="imgTwo img"
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      height: "400px",
                      objectFit: "cover",
                    }}
                    src={e?.img}
                  />
                  {/* <img src={subTitle} alt="" className='img1' /> */}
                  <h2>{e.title}</h2>
                  <p>{e.subTitle}</p>
                </div>
              ))}
            </div>
          </Container>

          <section className=" grid-main">
            <div className="grid">
              <div className="text">
                <img src={subTitle2}></img>

                <h1>Book your table now</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid-one">
                  <div>
                    <input
                      type="text"
                      value={userName}
                      onChange={handelname}
                      placeholder="Name"
                      className="name p-2 "
                    />
                    {/* {userNameError && (
                      // <div style={{ color: "red" }}>{userNameError}</div>
                    )} */}
                  </div>
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={handelEmail}
                      placeholder="Email"
                      className="email p-2"
                    />
                    {/* {emailError && (
                      // <div style={{ color: "red" }}>{emailError}</div>
                    )} */}
                  </div>
                </div>
                <div className="grid-two ">
                  <div>
                    <input
                      type="text"
                      value={person}
                      onChange={handelperson}
                      placeholder="Person"
                      className="person p-2"
                    />
                    {/* {personerror && (
                      // <div style={{ color: "red" }}>{personerror}</div>
                    )} */}
                  </div>

                  <div>
                    <input
                      type="time"
                      value={timing}
                      onChange={handeltime}
                      placeholder="Timing"
                      className="timing p-2"
                    />
                    {/* {timingerror && (
                      // <div style={{ color: "red" }}>{timingerror}</div>
                    )} */}
                  </div>
                  <div>
                    <input
                      type="date"
                      value={date}
                      onChange={handeldate}
                      placeholder="Date"
                      className="date p-2"
                    />
                    {/* {dateError && (
                      // <div style={{ color: "red" }}>{timingerror}</div>
                    )} */}
                  </div>
                </div>
                <button type="submit" className="submit">
                  {" "}
                  Book a Table
                </button>
              </form>
            </div>
          </section>

          <section
            className="gallery mt-5 p-2  m-auto"
            style={{ width: "85%" }}
          >
            <div className="row">
              <div className="col lg-12 m-auto text-center">
                <img
                  src={blogSubTitle}
                  style={{ height: "25px", marginBottom: "15px" }}
                />
                <h3>Instagram Gallery</h3>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col lg-2 sm-12 gap-3">
                <img src={image1} />
              </div>
              <div className="col lg-2 sm-12">
                <img src={image2} />
              </div>
              <div className="col lg-2 sm-12">
                <img src={image3} />
              </div>
              <div className="col lg-2 sm-12">
                <img src={image4} />
              </div>
              <div className="col lg-2 sm-12">
                <img src={image5} />
              </div>
              <div className="col lg-2 sm-12">
                <img src={image6} />
              </div>
            </div>
          </section>
          <ToastContainer />

          <Footer />
        </>
      )}
    </>
  );
};
export default Blog;
