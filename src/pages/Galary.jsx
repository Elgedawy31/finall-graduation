import React from "react";

import ph1 from "../images/pizza.png";
import ph2 from "../images/redDish.png";
import ph3 from "../images/blackkdish.png";
import ph4 from "../images/vegetablesdish.png";
import ph5 from "../images/knifeHand.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Galary = () => {
  const navigation = useNavigate();
  return (
    <>
      <Header />

      <section className="blogheader">
        <div className="row m-auto text-center pt-5 pb-5">
          <div className="col">
            <div className="h1">Galary</div>
          </div>
        </div>
      </section>
      <section className=" all-sec-gris">
        <section className="first_galary">
          {/* <div className=" row ms-1 first-row-grid d-flex flex-fill  flex-row flex-wrap justify-content-evenly">
                    <div className="part1   col-lg-6 col-sm-12 d-sm-block">
                        <div className="ph_content">
                            <span className="ital">italian paste</span>
                            <span className="rec">recipes</span>

                        </div>

                    </div>
                    <div className=" col-lg-3 col-sm-12 part2 d-sm-block ">
                        <img className="ph1" src={ph1} alt="pizza" />

                    </div>
                    <div className=" col-lg-3 col-sm-12 d-sm-block part3">
                        <img className="ph2" src={ph2} alt="pizza" />

                    </div>


                </div>

                <div className=' row second-row-grid '>
                    <div className=" col-lg-3 col-sm-12 d-sm-block part4">
                        <img className="ph3" src={ph3} alt="pizza" />
                    </div>

                    <div className="  col-lg-3 col-sm-12 d-sm-block part5">
                        <img className="ph4" src={ph4} alt="pizza" />
                    </div>

                    <div className="  col-lg-6 col-sm-12 d-sm-block part6 ">
                        <img className="ph5" src={ph5} alt="pizza" />

                    </div> */}

          <section className="first-col-grid">
            <div className="part1  ">
              <div className="ph_content">
                <span className="ital">italian paste</span>
                <span className="rec">recipes</span>
              </div>
            </div>

            <div className="col-flex1">
              <div className=" col-lg-3 col-sm-12 d-sm-block part4">
                <img className="ph3" src={ph3} alt="pizza" />
              </div>

              <div className="  col-lg-3 col-sm-12 d-sm-block part5">
                <img className="ph4" src={ph4} alt="pizza" />
              </div>
            </div>
          </section>

          <section className="second-col-grid ">
            <div className="col-flex2">
              <div className=" col-lg-3 col-sm-12 d-sm-block part3">
                <img className="ph1" src={ph1} alt="pizza" />
              </div>
              <div className="  col-lg-6 col-sm-12 d-sm-block part6 ">
                <img className="ph2" src={ph2} alt="pizza" />
              </div>
            </div>

            <div className=" col-lg-3 col-sm-12 part2 d-sm-block ">
              <img className="ph5" src={ph5} alt="pizza" />
            </div>
          </section>
        </section>
        <div className="btn-div-grid">
          <button className="btn_all_dishes"> see all dishes</button>
        </div>
      </section>

      <div className="second_section_galary">
        <div className="second_content">
          <label className="reserv_lab">R E S E R V A T I O N</label>
          <span className="title_sec_galary">
            This evening <br />
            will be graet!
          </span>
          <p className="desc_sec_galary">
            Lorem Ipsum is that it has a more-or-less <br /> normal look like
            readable English.{" "}
          </p>
          <button
            className="btn_book_table"
            onClick={() => navigation("/booking")}
          >
            Book a Table
          </button>
          <button className="btn_get">Get in touch</button>
        </div>
      </div>
      <div className="third_sec_galary">
        <div className="third_galary_content">
          <div className="grid-container_galary">
            <div className="first_content_desc">
              <label className="feature_lab">F E A T U R E</label>
              <span className="menu_title">
                Always fresh <br />
                ingredients
              </span>
              <p className="menu_desc">
                The people, food and the prime locations make Rodich the <br />{" "}
                perfect place good friends & family to come together and
                <br /> have great time.
              </p>
              <button className="btn_view_menu">View Menu</button>
            </div>
            <div className="first_menu_img"></div>
            <div className="second_menu_img"></div>
            <div className="third_menu_content">
              <label className="feature_lab">F E A T U R E</label>
              <span className="menu_title">
                We invite you to <br />
                visit our restaurant
              </span>
              <p className="menu_desc">
                Every time you perfectly dine with us, it should happy for{" "}
                <br />
                great inspired food in an environment designed with
                <br /> individual touches unique to the local area.
              </p>
              <button className="btn_view_menu">View Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Galary;
