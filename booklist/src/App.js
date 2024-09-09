import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
      </BookContextProvider>
    </div>
  );
}

export default App;
