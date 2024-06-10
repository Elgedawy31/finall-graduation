import food_photo_shop from "../images/burger.png";
import white_star from "../images/Screenshot (180).png";
import white_line from "../images/line2.png";
import insta from "../images/insta.png";
import face from "../images/face.png";
import twit from "../images/twit.png";
import pinter from "../images/pinter.png";
import Discreption from "../components/Discreption";
import { IoStarSharp } from "react-icons/io5";
import egg1 from "../images/eggg.png";
import egg2 from "../images/egg2.png";
import egg3 from "../images/egg3.png";
import line from "../images/Line (1).png";
import Footer from "../components/Footer";

// import pancake from '../images/puncake.png'
// import burger from '../images/katchabpurger.png'
// import chinese from '../images/chineese.png'
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import UniLoading from "../components/loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { APP_URL } from "../utils/Constants";
import { ToastContainer, toast } from "react-toastify";

const ShopSingle = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const notify = (msg) => toast(msg);
  const [quantity, setQuantity] = useState(1);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const getData = async () => {
        const res = await axios.get(
          `${APP_URL}/products?type=${location?.state?.type}`
        );
        setProducts(res.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    setProduct(location?.state);
  }, [location]);

  const handleSubmit = async () => {
    const data = {
      quantity: quantity,
      total: product?.price * quantity,
      subTotal: product?.price * 0.8 * quantity,
    };
    const res = await axios.post(
      `${APP_URL}/orders/${product?._id}`,
      data
    );

    if (res?.data) {
      setSent(true);
    }
  };

  useEffect(() => {
    if (sent) {
      notify("Order Added To Cart");
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
                <div className="h1">Shop Single</div>
              </div>
            </div>
          </section>
          <div className="first_sec_shop">
            <div className="grid_sec_shop d-flex gap-5">
              <div style={{ flex: 1 }}>
                <img
                  className="food_photo_shop"
                  src={location.state?.imageUrl}
                  alt="food"
                />{" "}
              </div>
              <div className="shop_desc" style={{ flex: 1 }}>
                <label className="shop_name">{product?.title}</label>
                <img className="white_star_shop" src={white_star} alt="line" />
             
                <span className="order_price mt-1">
                  ${product?.price?.toFixed(2)}
                </span>
                <img className="shop_line" src={white_line} alt="line" />
                <p>{product?.description}</p>
                <div className="mb-5">
                  <input
                    className="numbers_order"
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                    min={1}
                    value={quantity}
                  ></input>
                  <button className="order_btn" onClick={handleSubmit}>
                    Add to cart
                  </button>
                </div>
                <p className="p_desc">
                  #no: <span className="num_cart">{product?._id}</span>
                </p>
                <p className="p_desc">
                  CATEGORY:{" "}
                  <span className="category_cart">{product?.type}</span>
                </p>
                <p className="p_desc">
                  TAGS:{" "}
                  <span className="tags">
                    {" "}
                    {product?.tags?.map((ele) => `  ${ele},  `)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="second_sec_shop">
            <div className="second_grid_sec_shop">
              <label className="discription_label">Discreption</label>{" "}
              <label className="review_lab">
                {/* Review(<span className="num_review">0</span>) */}
              </label>
              <Discreption desc={product?.description} />
            </div>
          </div>
          <section className="parent-deserts pt-5 bp-5">
            <div className="desert-price w-50 mb-4  m-auto d-block text-center">
              <h5 className=" ">MOSTLY LOVED</h5>
              <h2 className="mt-2">Frequently Orders</h2>
            </div>

            <div className=" all-prices pt-4 fw-bold   pb-5 m-auto w-100 d-flex justify-content-evenly">
              {products.slice(0, 4).map((ele) => (
                <div
                  className="col-lg-4  mt-5 col-sm-12 "
                  onClick={() => setProduct(ele)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={ele?.imageUrl} />
                  <span>
                    <h4>{ele?.title}</h4>
                    <img src={line} />
                    <pre className="pt-2 d-flex justify-content-between  gap-2">
                      <p className="d-flex gap-2">
                        {" "}
                        <del className="d-inline ">${ele?.price}</del>
                        <p style={{ color: "#0F3C4F" }}>
                          ${ele?.price * 0.8}
                        </p>{" "}
                      </p>
                      <p className="d-inline stars">
                        {" "}
                        <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
                        <IoStarSharp />
                      </p>
                    </pre>
                  </span>
                </div>
              ))}
            </div>
            {/* <div className="m-auto col-lg-4 btn-sales">
          <button>Order Now</button>
        </div> */}
          </section>
          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  );
};
export default ShopSingle;
