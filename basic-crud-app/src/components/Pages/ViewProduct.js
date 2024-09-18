import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function ViewProduct() {
  let [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate

  let deleteMethod = (productId) => {
    Swal.fire({
      title: "Are you sure you want to delete this product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "purple",
      cancelButtonColor: "purple",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/products/${productId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setIsDeleted(true);
          });
        Swal.fire({
          title: "Deleted!",
          text: "The product has been deleted.",
          icon: "success",
          confirmButtonColor: "purple",
        });
        navigate("/products");
      }
    }).catch((error) => {
      //Add error handling , this ensures users are informed if something goes wrong during the fetch
  console.error("Error fetching product:", error);
  Swal.fire({
    title: "Error!",
    text: "Could not fetch product data.",
    icon: "error",
  });
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
      }) .catch((error) => {
        //Add error handling , this ensures users are informed if something goes wrong during the fetch
    console.error("Error fetching product:", error);
    Swal.fire({
      title: "Error!",
      text: "Could not fetch product data.",
      icon: "error",
    });
  });;
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
