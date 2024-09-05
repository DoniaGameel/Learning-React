import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  // state
  let [products, setProducts] = useState([]);
  // fetch the data
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <ProductCard product={product} showButton={true}></ProductCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
