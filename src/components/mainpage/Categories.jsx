import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/wer.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/wer.png",
      cateName: "Baby Cloth",
    },
    {
    cateImg: "./images/category/wer.png",
      cateName: "Man Cloth",
    },
    {
      cateImg: "./images/category/wer.png",
      cateName: "Woman Cloth",
    },
    {
      cateImg: "./images/category/wer.png",
      cateName: "Shirt items",
    },
    {
      cateImg: "./images/category/wer.png",
      cateName: "Paint itens",
    },
    {
      cateImg: "./images/category/wer.png",
      cateName: "Summer cloths",
    },
    {
      cateImg: "./images/category/wer.png",
      cateName: "Winter cloths",
    },
    {
      cateImg: "./images/category/wer.png",
      cateName: "Baby Toys",
    },
    
    
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
