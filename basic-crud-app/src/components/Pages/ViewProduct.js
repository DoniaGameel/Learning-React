import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ViewProduct() {
  let [isDeleted, setIsDeleted] = useState(false);

  let deleteMethod = (productId) => {
    fetch(`http://localhost:9000/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsDeleted(true);
      });
  };
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
      {!isDeleted ? (
        <>
          <h1 className="card-text-unstyled">
            {product.title} {isDeleted}
          </h1>
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text-unstyled">Price: {product.price}$</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteMethod(product.id);
                  console.log(`isDeleted ${isDeleted}`);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Item Is Deleted</h1>
        </>
      )}
    </>
  );
}

export default ViewProduct;
