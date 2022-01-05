import React from "react";
import rating from "./rating";

export default function product(props) {
  const { product } = props;
  return (
    <div kehy={products._id} className="card">
      <a href={`/product/${products._id}`}>
        <img className="medium" src={products.image} alt={products.name} />{" "}
      </a>
      <div className="card-body">
        <a href={`/product/${products._id}`}>
          <h2> {products.name} </h2>
        </a>
        {/* <rating */}
        <div className="price"> {products.price} </div>
      </div>
    </div>
  );
}
