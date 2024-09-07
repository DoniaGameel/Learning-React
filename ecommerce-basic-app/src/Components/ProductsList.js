import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  // state
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  // fetch the data
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductsInCategory = (category) => {
    fetch(`${api_url}/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        {/* Button To show all products without filtering */}
        <button
          className="btn btn-info"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>
        {/* Categories Buttons */}
        {categories.map((category) => {
          return (
            <button
              key={category}
              className="btn btn-info"
              onClick={() => {
                getProductsInCategory(category);
              }}
            >
              {category}
            </button>
          );
        })}
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
