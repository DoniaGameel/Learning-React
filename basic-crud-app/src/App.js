import "./App.css";
import Navbar from "./components/Navbar";
import AddProduct from "./components/Pages/AddProduct";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
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

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="col-10">
                    <Home></Home>
                  </div>
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <div className="col-10">
                    <Products></Products>
                  </div>
                </>
              }
            />
            <Route
              path="/products/add"
              element={
                <>
                  <div className="col-10">
                    <AddProduct></AddProduct>
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
