import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Divynashu",
    age: "21",
  };

  let newArr = [1, 2, 4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Talwind Test
      </h1>
      {/* <Card channel="Wouk" someObj={myObj} someArr={newArr} />  you can asses value like this */}
      <Card username="Divyanshu" btnText="Click Me" />
      <Card username="Wouk" />
    </>
  );
}

export default App;
