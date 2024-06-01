import { useState } from "react"; // import useState hook from react
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // react don't allow you  to updation on ui by simple js code , it's done by it's own method called hooks

  let [counter, setCounter] = useState(1); // you can use any name in place of counter and setCounter

  // let counter = 1;

  const addValue = () => {
    // counter = counter + 1;
    if (counter < 21) {
      // setCounter(counter + 1); // only update ui state not value of variable
      // interview question // how to update prevCounter

      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const removeValue = () => {
    // counter = counter - 1;
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
