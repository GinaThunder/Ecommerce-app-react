import React from "react";
import Rating from "../components/Rating";
import data from "../data";
// import Product from "../components/Product";

export default function ProductScreen(props) {
  const product = data.product.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Fund</div>;
  }
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.numReviews}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
