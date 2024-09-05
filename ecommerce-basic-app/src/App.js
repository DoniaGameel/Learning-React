//import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <ProductsList></ProductsList>
    </div>
  );
}

export default App;
