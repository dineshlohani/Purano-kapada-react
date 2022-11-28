import React from "react";
import "./Header.css";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = ({ cartItem }) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItem} />
      <Navbar />
    </>
  );
};

export default Header;
