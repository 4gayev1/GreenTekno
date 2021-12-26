import classes from "./products.module.css";
import React, { useState, useEffect } from "react";

var array = [];
let c = 0;
//https://food-app-dc402-default-rtdb.firebaseio.com/meals.json

const Products = () => {
  const [product, setProduct] = useState([
    {
      message: "https://images.dog.ceo/breeds/dingo/n02115641_12922.jpg",
      status: "success",
    },
    {
      message:
        "https://images.dog.ceo/breeds/spaniel-japanese/n02085782_866.jpg",
      status: "success",
    },
    {
      message: "https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg",
      status: "success",
    },
    {
      message:
        "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191103202017556_COVER.jpg",
      status: "success",
    },
    {
      message: "https://images.dog.ceo/breeds/bluetick/n02088632_3640.jpg",
      status: "success",
    },
    {
      message: "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
      status: "success",
    },
    {
      message: "https://images.dog.ceo/breeds/mix/penny.jpg",
      status: "success",
    },
    {
      message: "https://images.dog.ceo/breeds/malinois/n02105162_10351.jpg",
      status: "success",
    },
    {
      message:
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_1062.jpg",
      status: "success",
    },
    {
      message: "https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg",
      status: "success",
    },
    {
      message: "https://images.dog.ceo/breeds/papillon/n02086910_1409.jpg",
      status: "success",
    },
    {
      message: "https://images.dog.ceo/breeds/groenendael/n02105056_3091.jpg",
      status: "success",
    },
  ]);
  const [showMore, setShowMore] = useState(0);

  const showMoreItem = () => {
    setShowMore(showMore + 1);
  };

  function getData() {
    for (let i = 0; i < 12; i++) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => product.push(data));
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(product);
  return (
    <div>
      <div className={`${classes.container}`}>
        <p>35 Məhsul tapıldı</p>
        <select className={`${classes.select_box}`}>
          <option value="" disabled selected>
            Ada görə sırala
          </option>
          <option value="">A</option>
          <option value="">A</option>
          <option value="">A</option>
          <option value="">A</option>
          <option value="">A</option>
          <option value="">A</option>
        </select>
      </div>

      <div className={`${classes.product_div}`}>
        {product.map((p) => {
          return (
            <div className={`${classes.product_item}`} key={showMore}>
              
              <img
                key={showMore}
                src={p.message}
                alt="dog"
                className={`${classes.product_img}`}
              />
              <h3>Apple</h3>
              <p>Price:$500</p>
            </div>
          );
        })}
      </div>

      <button onClick={showMoreItem} className={`${classes.btn}`}>
        Daha çox məhsul
      </button>
    </div>
  );
};

export default Products;
