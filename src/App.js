import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Order } from "./pages/Order";
import Booking from "./pages/Booking";
import Galary from "./pages/Galary";
import Review from "./pages/Review";
import ShopSingle from "./pages/ShopSingle";
import Blogsingle from "./pages/Blogsingle";
import Blog from "./pages/Blog";
import License from "./pages/License";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Ourchefs from "./pages/Ourchefs";
import { ChefSingle } from "./pages/ChefSingle";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallary" element={<Galary />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/order" element={<Order />} />
          <Route path="/review" element={<Review />} />
          <Route path="/shopSingle" element={<ShopSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/license" element={<License />} />
          <Route path="/blog/:id" element={<Blogsingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-order" element={<ShopSingle />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cheefs" element={<Ourchefs />} />
          <Route path="/cheefs/:id" element={<ChefSingle />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
