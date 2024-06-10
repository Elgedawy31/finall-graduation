import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import "../styles/contact.css";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/loading/Loading";
import axios from "axios";
import { APP_URL } from "../utils/Constants";

const Contact = () => {
  const [Name, setUsername] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [phone, setPhone] = useState();
  const [messsage, setMessage] = useState();

  const notify = (msg) => toast(msg);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  //validation
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messsageErrror, setMessageError] = useState("");

  const handelname = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 3) {
      setNameError("Username must be at least 3 characters long");
    } else {
      setNameError("");
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

  const handelSubject = (e) => {
    setSubject(e.target.value);
    if (!subject) {
      setSubjectError("subject required");
    }
    // else if (e.target.value.length < 6) {
    //     subjectError("password must be longer than 6 chars")

    // }
    else {
      setSubjectError("");
    }
  };
  const handelMessage = (e) => {
    setMessage(e.target.value);
    if (!messsage) {
      setMessageError("message required");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Name && subject && email && phone && messsage) {
      try {
        setLoading(true);
        const response = await axios.post(`${APP_URL}/contact`, {
          name: Name,
          email,
          phone,
          subject,
          message: messsage,
        });

        if (response.data?._id) {
          setSent(true);
          setUsername("");
          setEmail("");
          setMessage("");
          setSubject("");
          setPhone("");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      notify("All Inputs Requires");
    }
  };

  useEffect(() => {
    if (sent) {
      notify("Question Sent");
      setSent(false);
    }
  }, [sent]);

  return (
    <>
      <>
        {" "}
        <Header />
        <section className="blogheader">
          <div className="row m-auto text-center pt-5 pb-5">
            <div className="col">
              <div className="h1">Contact</div>
            </div>
          </div>
        </section>
        <Container>
          <main>
            <div className="contact-big-div ">
              <div className=" col-lg-6 col-sm-12 info">
                <h4>contact Information</h4>
                <p>
                  Bring the table winwin survival strateges ensure proactive
                  domination the end of the day going real times multiple
                  touchpoints.
                </p>
                <p>
                  <CiLocationOn className="iconn" /> Riverside 25, San
                  Francisco, California
                </p>
                <p>
                  <CgMail className="iconn" /> evanmattew@mail.com
                </p>
                <p>
                  <IoCallOutline className="iconn" /> 800-234-567
                </p>

                <p className="iconss">
                  {" "}
                  <FaInstagram className="iconn2" />{" "}
                  <FaFacebook className="iconn2" />{" "}
                  <FaTwitter className="iconn2" />{" "}
                  <FaPinterest className="iconn2" />
                </p>
              </div>

              <div className="col-lg-6 col-sm-12 question">
                <h5>MAIL US</h5>
                <h1>Have a question?</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row mt-4">
                    <div className="col-lg-6 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          value={Name}
                          onChange={handelname}
                        />
                      </div>
                      {nameError && (
                        <div style={{ color: "red" }}>{nameError}</div>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={handelEmail}
                        />
                      </div>
                      {emailError && (
                        <div style={{ color: "red" }}>{emailError}</div>
                      )}
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-6 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Subject"
                          value={subject}
                          onChange={handelSubject}
                        />
                      </div>
                      {subjectError && (
                        <div style={{ color: "red" }}>{subjectError}</div>
                      )}
                    </div>

                    <div className="col-lg-6 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Phone"
                          value={phone}
                          onChange={handelPhone}
                        />
                      </div>
                      {phoneError && (
                        <div style={{ color: "red" }}>{phoneError}</div>
                      )}
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <textarea
                        placeholder="Message"
                        value={messsage}
                        onChange={handelMessage}
                        name="comment"
                        form="usrform"
                      ></textarea>
                    </div>
                    {messsageErrror && (
                      <div style={{ color: "red" }}>{messsageErrror}</div>
                    )}
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-3 col-sm-5 sendContact">
                      <button
                        type="submit"
                        style={{
                          opacity: loading ? 0.5 : 1,
                          cursor: loading ? "not-allowed" : "pointer",
                        }}
                      >
                        Send
                      </button>
                    </div>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
          </main>

          <div className="visitsite">
            <h4> VISIT US!</h4>
            <h1>Come on and visit our website</h1>
          </div>
          <section className="second">
            <div className="gridcontact">
              <div className="divonegrid">
                {" "}
                <h2>Los Angelos, CA</h2>
                <br></br>
                <p>
                  Riverside 25, San Francisco<br></br> California
                </p>
                <p>
                  <CgMail className="icon3" /> contact@restaurantate.com
                </p>
                <p>
                  <IoCallOutline className="icon3" /> contact@restaurantate.com
                </p>
              </div>

              <div className="imgGRID"></div>
            </div>

            <div className="gridcontact2">
              <div className="divonegrid2">
                {" "}
                <h2>San Francisco, CA</h2>
                <br></br>
                <p>
                  Riverside 25, San Francisco<br></br> California
                </p>
                <p>
                  <CgMail className="icon3" /> contact@restaurantate.com
                </p>
                <p>
                  <IoCallOutline className="icon3" /> contact@restaurantate.com
                </p>
              </div>

              <div className="imgGRID2"></div>
            </div>
          </section>
        </Container>
        <Footer />
      </>
    </>
  );
};

export default Contact;
