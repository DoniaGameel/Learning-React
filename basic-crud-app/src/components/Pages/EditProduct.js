import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function EditProduct() {
  const navigate = useNavigate(); // Hook to programmatically navigate
  // title data to be sent to the server
  let [title, setTitle] = useState("");
  // description data to be sent to the server
  let [description, setDescription] = useState("");
  // category data to be sent to the server
  let [category, setCategory] = useState("");
  // price data to be sent to the server
  let [price, setPrice] = useState(0);
  // price data to be sent to the server
  let [imageURL, setImageURL] = useState("");
  let params = useParams();
  // get the product data to be edited
  useEffect(() => {
    fetch(`http://localhost:9000/products/${params.productId}`)
      .then((res) => res.json())
      .then((product) => {
        setTitle(product.title);
        setDescription(product.description);
        setCategory(product.category);
        setPrice(product.price);
        setImageURL(product.image);
      })
      .catch((error) => {
      //Add error handling , this ensures users are informed if something goes wrong during the fetch
  console.error("Error fetching product:", error);
  Swal.fire({
    title: "Error!",
    text: "Could not fetch product data.",
    icon: "error",
  });
});
  }, [params.productId]);
  return (
    <>
      <h1>Edit Product</h1>
      <form
      // better to add handle submit function
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`http://localhost:3000/products/${params.productId}`, {
            method: "PUT",
            body: JSON.stringify({
              title: title,
              price: price,
              description: description,
              category: category,
              image: imageURL,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              Swal.fire({
                title: "Product is Edited Successfully!",
                confirmButtonColor: "purple",
              }).then(() => {
                navigate("/products");
              });
            }).catch((error) => {
              //Add error handling , this ensures users are informed if something goes wrong during the fetch
          console.error("Error fetching product:", error);
          Swal.fire({
            title: "Error!",
            text: "Could not fetch product data.",
            icon: "error",
          });
        });;
        }}
      >
        <div className="mb-3 w-75">
          <label htmlFor="ptoductTitle" className="form-label">
            Product title
          </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="ptoductTitle"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3 w-75">
          <label htmlFor="ptoductDescription" className="form-label">
            Product Description
          </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="ptoductDescription"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3 w-75">
          <label htmlFor="ptoductCategory" className="form-label">
            Product Category
          </label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="ptoductCategory"
            placeholder="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-3 w-25">
          <label htmlFor="ptoductPrice" className="form-label">
            Product Price
          </label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="ptoductPrice"
            placeholder="Enter Price in $"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3 w-25">
          <label htmlFor="ptoductPrice" className="form-label">
            Product Image
          </label>
          <input
            required="required"
            type="url"
            className="form-control"
            id="ptoductPrice"
            placeholder="Add image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    </>
  );
}
export default EditProduct;
