import "./App.css";
import Navbar from "./components/Navbar";
import AddProduct from "./components/Pages/AddProduct";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import ViewProduct from "./components/Pages/ViewProduct";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/products" element={<Products></Products>} />
              <Route path="/products/add" element={<AddProduct></AddProduct>} />
              <Route
                path="/products/:productId"
                element={<ViewProduct></ViewProduct>}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
