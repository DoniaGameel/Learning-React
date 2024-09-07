import "./Products.css";
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      <h1>Products Page</h1>
      <Link to="/products/add" className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Product-1</td>
            <td>100$</td>
            <th>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-info">View</button>
              <button className="btn btn-primary">Edit</button>
            </th>
          </tr>
          <tr>
            <td>2</td>
            <td>Product-2</td>
            <td>200$</td>
            <th>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-info">View</button>
              <button className="btn btn-primary">Edit</button>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Products;
