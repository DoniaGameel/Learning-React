import productsData from "../Products-data";
import Product from "./Product";
import "./ProductsList.css";
function ProductsList() {
  console.log(productsData);
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
