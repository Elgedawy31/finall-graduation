import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import "../styles/Ourchefs.css";
import line11 from "../images/Line (22).png";
import line2 from "../images/Line (33).png";
import line3 from "../images/Line (44).png";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import skilledimg from "../images/skiiledImge.png";
import Table from "../components/Table";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { APP_URL } from "../utils/Constants";
import UniLoading from "../components/loading/Loading";

const Ourchefs = () => {
  const [cheefs, setcheefs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const getData = async () => {
        const res = await axios.get(`${APP_URL}/chef`);
        if (res.data) {
          setcheefs(res.data);
          setLoading(false);
        }
      };
      getData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const [showIcons, setShowIcons] = useState(false);
  const [showIcon2, setShowIcon2] = useState(false);
  const [showIcon3, setShowIcon3] = useState(false);
  const [showIcon4, setShowIcon4] = useState(false);
  const [showIcon5, setShowIcon5] = useState(false);
  const [showIcon6, setShowIcon6] = useState(false);

  console.log(cheefs[0]?.avatar);

  return (
    <div>
      <Header />
      {loading ? (
        <UniLoading />
      ) : (
        <>
          {" "}
          <section className="blogheader">
            <div className="row m-auto text-center pt-5 pb-5">
              <div className="col">
                <div className="h1">Our Chefs</div>
              </div>
            </div>
          </section>
          <Container className="main-cheif-section">
            <div className="aboutsec">
              <h6>TEAM</h6>
              <h3>Meet Our Professional Chefs</h3>
            </div>
            <section className="chefss">
              {cheefs?.map((ele) => (
                <section
                  onMouseEnter={() => setShowIcons(true)}
                  onMouseLeave={() => setShowIcons(false)}
                >
                  <span
                    className="imgg1"
                    style={{ backgroundImage: `url(${ele?.avatar})` }}
                  >
                    {showIcons && (
                      <div>
                        {
                          <div className="chefInfo  ">
                            {ele?.links?.map((ele) => (
                              <>
                                {ele?.instagram && (
                                  <>
                                    <p>
                                      <a
                                        className="text-white"
                                        href={`https://instagram.com//${ele?.instagram}`}
                                      >
                                        {" "}
                                        <FaInstagram />
                                      </a>
                                    </p>
                                  </>
                                )}
                                {ele?.facebook && (
                                  <>
                                    <p>
                                      <a
                                        className="text-white"
                                        href={`https://facebook.com//${ele?.facebook}`}
                                      >
                                        {" "}
                                        <FaFacebook />
                                      </a>
                                    </p>
                                  </>
                                )}
                                {ele?.twitter && (
                                  <>
                                    <p>
                                      <a
                                        className="text-white"
                                        href={`https://Twitter.com//${ele?.twitter}`}
                                      >
                                        {" "}
                                        <CiTwitter />
                                      </a>
                                    </p>
                                  </>
                                )}
                              </>
                            ))}
                          </div>
                        }
                      </div>
                    )}
                  </span>
                  <h5>{ele?.name}</h5>
                  <p>{ele?.type}</p>
                </section>
              ))}
            </section>
          </Container>
          {/* second */}
          <Container className="skiiledTeam">
            <div className="skilledOne">
              <h6>Best Cheifs</h6>
              <h1>Only Skilled Team</h1>
              <p>
                Bring tothe table survival strategies to ensured proactived
                domination At the end of the day, going forward, a new normal
                that has evolved from generation X is on the runway heading
                towards a streamlined touchpoints for offshoring.
              </p>
              <h3>Experienced</h3>
              <img src={line11} />
              <h3>Professionalism</h3>
              <img src={line2} />

              <h3>Creative</h3>
              <img src={line3} />
              <button className="skilledButton">See All dishes</button>
            </div>
            <div className="skilledTwo">
              <img src={skilledimg} />
            </div>
          </Container>
          {/* fourth */}
          <section className="aboutTable">
            <Table />
          </section>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Ourchefs;
