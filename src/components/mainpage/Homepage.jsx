import React from "react";
import Categories from "./Categories";

import Slider from "./Slider";
import "./Home.css";

const Homepage = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Homepage;
