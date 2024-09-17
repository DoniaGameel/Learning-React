import { useState } from "react";

function WelcomeFC(props) {
  // Hooks
  let [counter, setCounter] = useState(0);

  console.log(props);
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <h6>{counter}</h6>
      <button
        onClick={() => {
          setCounter(counter++);
        }}
      ></button>
    </>
  );
}

export default WelcomeFC;
