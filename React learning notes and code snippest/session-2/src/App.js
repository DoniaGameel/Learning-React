//import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import WelcomeCC from "./components/WelcomeCC";
import WelcomeFC from "./components/WelcomeFC";

function App() {
  return (
    <div className="App">
      {/* <WelcomeFC name="Ahmed" title="30" />
      <WelcomeCC name="Hamada" /> */}
      <Form />
    </div>
  );
}

export default App;
