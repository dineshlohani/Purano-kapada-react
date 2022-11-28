import React from "react";
import Footer from "../common/footer/Footer";
import Annu from "../components/announcements/Annu";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Homepage from "../components/mainpage/Homepage";
import NewArrivals from "../components/newarrivals/NewArrivals";
import TopCate from "../components/top/TopCate";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <div className="container">
        <Homepage cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <TopCate />
        <NewArrivals />
        <Discount />
        <Annu />
        <Wrapper />
        <Footer />
      </div>
    </>
  );
};

export default Pages;
