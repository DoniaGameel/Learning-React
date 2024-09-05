//import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";
import About from "./Components/About";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider></Slider>
                <ProductsList></ProductsList>
              </>
            }
          />
          <Route path="about" element={<About></About>} />
          <Route
            path="product/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
