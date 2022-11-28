import React from "react";

const Annu = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annouc">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src="./images/bacg.jpg" width="100%" height="100%" />
          </div>
          <div className="img" style={mystyle1}>
            <img src="./images/banner1.png" width="100%" height="100%" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annu;
