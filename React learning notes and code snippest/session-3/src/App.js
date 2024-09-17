import "./App.css";
//import { useState } from "react";
//import List from "./components/list";
import ProductsList from "./components/ProductsList";

// function App() {
//   let [isLoggedIn, setIsLoggedIn] = useState(false);
//   let element;
//   if (isLoggedIn) {
//     element = <h1>I'm Logged In</h1>;
//   } else {
//     element = <h1>I'm not logged in</h1>;
//   }
//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setIsLoggedIn(true);
//         }}
//       >
//         Log In
//       </button>
//       <br />
//       {element}
//       <List />
//     </div>
//   );
// }

function App() {
  return <ProductsList />;
}
export default App;
