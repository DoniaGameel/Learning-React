import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Products.css";
function Products() {
  let getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  let [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  let deleteMethod = (productId) => {
    fetch(`http://localhost:9000/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllProducts();
      });
  };

  return (
    <>
      <h1>Products Page</h1>
      <Link to="/products/add" className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table className="table table-striped mt-5 ml-5 mr-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="title-td">{product.title}</td>
                <td className="description-td">
                  {product.description.slice(0, 100)}...
                </td>
                <td>{product.price}$</td>
                <th>
                  <Link to={`/products/${product.id}`} className="btn btn-info">
                    View
                  </Link>
                  <button className="btn btn-primary">Edit</button>
                  <button
                    className="btn btn-danger delete-btn-in-table"
                    onClick={() => {
                      deleteMethod(product.id);
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
