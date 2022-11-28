import React from "react";
import logo1 from "../assets/images/logo1.png";
import { Link } from "react-router-dom";

const Search = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo1} alt="" height="80" width="180" />
          </div>

          <div className="search-box c_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit here...." />
            <span>All Category</span>
          </div>
          

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span style={{background:"red",color:"white", fontSize:"15px"}}>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
