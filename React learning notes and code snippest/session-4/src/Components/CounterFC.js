import { useState, useEffect } from "react";

function CounterFC() {
  let [counter, setCounter] = useState(0);
  // [products, setProducts] = useState([]); // productes is now array
  // we add the initial value in ()

  useEffect(() => {
    document.title = `You Clicked ${counter} times`;
  });

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default CounterFC;
