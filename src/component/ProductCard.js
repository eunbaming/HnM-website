import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    // console.log("clicked");
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="products" onClick={showDetail}>
      <a>
        <img width={300} src={item?.img} />
      </a>
      <div className="product-command">
        <div className="product-choice">
          {item?.choice == true ? "Conscious Choice" : ""}
        </div>
        <div>{item?.title}</div>
        <div>{item?.price}₩</div>
        <div>{item?.new == true ? "New" : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;
