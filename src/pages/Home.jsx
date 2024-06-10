import React, { useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

import Hero from "../components/hero/Hero";
import History from "../components/history/History";
import Locations from "../components/locations/Locations";
import Footer from "../components/Footer";
import HomeMenu from "../components/HomeMenu/HomMenu";
import Offers from "../components/Offers/Offers";
function Home() {
  const [products , setProducts] = useState([])
  return (
    <>
      <Header />
      <div className="pt-3" style={{ background: "#0F3C4F", height: "718px" }}>
        <Container>
          <Hero />
        </Container>
        <div
          className="py-5"
          style={{ backgroundColor: "#FFF8F5", margin: "5rem 0" }}
        >
          <Locations />
          <History />
        </div>

        <Container>
          <HomeMenu setProducts2={setProducts} />
        </Container>
        <Offers products={products} />

        <Footer />
      </div>
    </>
  );
}

export default Home;
