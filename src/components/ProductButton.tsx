import React from "react";
import "./ProductButton.css";

type ProductButtonProps = {
  id: string;
  name: string;
  price: number;
  count: number;
  onClick: () => void;
};

const ProductButton: React.FC<ProductButtonProps> = ({
  id,
  name,
  price,
  count,
  onClick,
}) => (
  <div className="product-button">
    <button id={`${id}`} onClick={onClick}>
      {`${name} ${price} 円`}
    </button>
    <div id={`${id}-count`}>{count}</div>
  </div>
);

export default ProductButton;
