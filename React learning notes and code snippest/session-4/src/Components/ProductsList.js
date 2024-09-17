import productsData from "./Products-data";
import Product from "./Product";
import "./ProductsList.css";
import { useEffect, useState } from "react";
function ProductsList() {
  const [productsData, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const products = productsData.map((product) => {
    return product.price > 100 ? (
      <Product key={product.id} product={product}></Product>
    ) : null;
  });
  return (
    <div className="products-list">
      <div className="row">{products}</div>
    </div>
  );
}

export default ProductsList;
