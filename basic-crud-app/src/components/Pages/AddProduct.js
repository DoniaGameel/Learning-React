import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function AddProduct() {
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

  return (
    <>
      <h1>Add New Product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // get the id of the last product to increment it to get the current id
          fetch("http://localhost:9000/products")
            .then((res) => res.json())
            .then((products) => {
              let lastProduct = products[products.length - 1];
              let lastProductId = lastProduct.id;
              let thisProductId = parseInt(lastProductId) + 1;
              // send the data to the server
              fetch("http://localhost:9000/products", {
                method: "POST",
                body: JSON.stringify({
                  id: thisProductId.toString(),
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
                    title: "Product is Added Successfully!",
                    confirmButtonColor: "purple",
                  }).then(() => {
                    navigate("/products");
                  });
                });
            });
        }}
      >
        <div className="mb-3 w-75">
          <label htmlFor="ptoductTitle" className="form-label">
            Product title
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="ptoductTitle"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3 w-75">
          <label htmlFor="ptoductDescription" className="form-label">
            Product Description
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="ptoductDescription"
            placeholder="Product Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3 w-75">
          <label htmlFor="ptoductCategory" className="form-label">
            Product Category
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="ptoductCategory"
            placeholder="Product Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-3 w-25">
          <label htmlFor="ptoductPrice" className="form-label">
            Product Price
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="ptoductPrice"
            placeholder="Enter Price in $"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3 w-25">
          <label htmlFor="ptoductPrice" className="form-label">
            Product Image
          </label>
          <input
            required
            type="url"
            className="form-control"
            id="ptoductPrice"
            placeholder="Add image URL"
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default AddProduct;
