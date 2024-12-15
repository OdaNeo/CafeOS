import React from "react";
import "./Summary.css";

type SummaryProps = {
  totalCount: number;
  totalPrice: number;
};

const Summary: React.FC<SummaryProps> = ({ totalCount, totalPrice }) => (
  <div className="summary">
    <h3>お会計</h3>
    <span id="count">商品数：{totalCount} 個</span>
    <span id="price">合計金額：{totalPrice} 円</span>
  </div>
);

export default Summary;
