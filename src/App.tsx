import { useState } from "react";
import ProductButton from "./components/ProductButton";
import Summary from "./components/Summary";
import "./App.css";
import { products } from "./const/products";

const App: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (id: string, price: number) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setTotalPrice((prev) => prev + price);
  };

  const totalCount = Object.values(counts).reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="app">
      <div className="products">
        {products.map((product) => (
          <ProductButton
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            count={counts[product.id] || 0}
            onClick={() => handleClick(product.id, product.price)}
          />
        ))}
      </div>
      <Summary totalCount={totalCount} totalPrice={totalPrice} />
    </div>
  );
};

export default App;
