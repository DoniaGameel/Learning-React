import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function ViewProduct() {
  // to get the product ID
  const params = useParams();
  let [product, setProduct] = useState({});
  // fetch the details of the product
  useEffect(() => {
    fetch(`http://localhost:9000/products/${params.productId}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params.productId]);
  return (
    <>
      <h1 className="card-text-unstyled">{product.title}</h1>
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text-unstyled">Price: {product.price}$</p>
          <Link to={`products/${product.id}/delete`} className="btn btn-danger">
            Delete
          </Link>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
