import React, { useEffect, useState } from "react";
import man1 from "../images/aboutman1.png";
import { IoBagRemoveSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import "../styles/Singlechef.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { APP_URL } from "../utils/Constants";
import UniLoading from "../components/loading/Loading";
import dayjs from "dayjs";

export const ChefSingle = () => {
  const [cheef, setcheef] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    try {
      const getData = async () => {
        const res = await axios.get(`${APP_URL}/chef/${id}`);
        if (res.data) {
          setcheef(res.data);
          setLoading(false);
        }
      };
      getData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  console.log(cheef);

  return (
    <>
      <Header />
      {loading ? (
        <UniLoading />
      ) : (
        <div>
          <section className="singleCheif">
            <section className="single1">
              <img
                src={cheef?.avatar}
                style={{ width: "85%", objectFit: "cover" }}
              />
            </section>
            <section className="single2">
              <h2>{cheef?.name}</h2>
              <h4>{cheef?.type}</h4>
              <p>{cheef?.description}</p>
              <div className="single-grid-divs">
                <div>
                  <p className="singlle">
                    <IoBagRemoveSharp />
                  </p>
                  <span>
                    <h5>Experience</h5>
                    <p>{cheef?.expirence || 0} years of Experience</p>
                  </span>
                </div>

                <div>
                  <p className="singlle">
                    <IoMdMail />
                  </p>
                  <span>
                    <h5>Mail</h5>
                    <p>{cheef?.email}</p>
                  </span>
                </div>

                <div>
                  <p className="singlle">
                    <IoCall />
                  </p>
                  <span>
                    <h5>Contact Us</h5>
                    <p>{cheef?.phone}</p>
                  </span>
                </div>

                <div>
                  <p className="singlle">
                    <CiLocationOn />
                  </p>
                  <span>
                    <h5>{cheef?.location}</h5>
                    <p>{dayjs(cheef?.createdAt).format("YYYY-MM-DD")}</p>
                  </span>
                </div>
              </div>
              <div>
                {
                  <div className="singleChefIcons  ">
                    {cheef?.links?.map((cheef) => (
                      <>
                        {cheef?.instagram && (
                          <>
                            <p>
                              <a
                                className="text-white"
                                href={`https://instagram.com//${cheef?.instagram}`}
                              >
                                {" "}
                                <FaInstagram  color="#0F3C4F" />
                              </a>
                            </p>
                          </>
                        )}
                        {cheef?.facebook && (
                          <>
                            <p>
                              <a
                                className="text-white"
                                href={`https://facebook.com//${cheef?.facebook}`}
                              >
                                {" "}
                                <FaFacebook   color="#0F3C4F"/>
                              </a>
                            </p>
                          </>
                        )}
                        {cheef?.twitter && (
                          <>
                            <p>
                              <a
                                className="text-white"
                                href={`https://Twitter.com//${cheef?.twitter}`}
                              >
                                {" "}
                                <FaTwitter  color="#0F3C4F" />
                              </a>
                            </p>
                          </>
                        )}
                      </>
                    ))}
                  </div>
                }
              </div>
            </section>
          </section>
          {/* second ---------- */}
          <section className="single-position-parent">
            <h4>PROMO</h4>
            <h1>My promo video</h1>
            <div className="positionimg"> </div>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
};
