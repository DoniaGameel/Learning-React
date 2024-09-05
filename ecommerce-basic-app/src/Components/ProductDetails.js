import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductDetails() {
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      <ProductCard product={product} showButton={false}></ProductCard>
    </>
  );
}

export default ProductDetails;
