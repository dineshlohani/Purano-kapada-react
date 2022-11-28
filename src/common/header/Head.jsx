import React from "react";
import Register from "./Register";
import Login from "./Login";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className=" head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa-solid fa-phone"></i>
            <label>+977 9863913049</label>
            <i className="fa fa-envelope"></i>
            <label>puranokapada@gmail.com</label>
          </div>
          <div><h1>
            PuranoKapada</h1></div>
          <div className="right row RText">
           <Link to='/register'>
            
           <lable style={{ margin:"30px",color:"white"}}>Register</lable>
           </Link>
           <Link to='/login'>
           <lable style={{ margin:"30px",color:"white"}}>Login</lable>
           </Link>
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>Flag</span>
            <label htmlFor="">Nepal</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
