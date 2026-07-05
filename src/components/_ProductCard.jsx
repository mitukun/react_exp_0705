// rafce と入力後タブキーを押してください😊
import React from "react";

const ProductCard = ({ productName, price, stock }) => {
  return (
    <div>
      <p>{productName}</p>
      <p>{price}円</p>
      <p>在庫: {stock}個</p>
    </div>
  );
};

export default ProductCard;
