import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import subTitle from "../images/Sub Title.png";
import img from "../images/blog-img1.png";
import Header from "../components/Header";
import "../styles/Blogsingle.css";
import Footer from "../components/Footer";
import { APP_URL } from "../utils/Constants";
import { useParams } from "react-router-dom";
import axios from "axios";
import UniLoading from "../components/loading/Loading";
const Blogsingle = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const { id } = useParams();
  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.get(`${APP_URL}/blog/${id}`);
        if (res.data) {
          setResult(res.data);
          setLoading(false)
        }
      };
      getData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

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
                <div className="h1">Blog Single</div>
              </div>
            </div>
          </section>
          <Container className="text-center p-4 m-5 m-auto">
            <div className="first">
              <img src={subTitle} className="skewimage" />
              <h1>{result?.title}</h1>

              <p>{result?.subTitle}</p>
            </div>

            <div className="div">
              <img src={result?.img} className="img " style={{height:'60vh' , objectFit:'cover'}}/>
              <div
                dangerouslySetInnerHTML={{ __html: result?.description }}
              ></div>
            </div>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default Blogsingle;
