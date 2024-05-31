import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Custom App!</h1>
    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <App />

//   // MyApp() // also we invoke like this beacuse it's also a function but we can't do this beacuse of problem on optimization

//   // <MyApp />
// );

//  (custom react object)
// const reactElement = {
//   type: "a",
//   props: {
//     herf: "https://google.com",
//     target: "_blank",
//   },
//   children: "Visit Google",
// };

// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

// create new  method

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
// ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);

// make element based on react method // have a special syntax

const anotherUser = "Divyanshu";

const reactElement = React.createElement(
  "a", // first parameter is tag
  {
    href: "https://google.com", // second parameter is object , add prop
    target: "_blank",
  },
  "click me to visit google", // direct Text
  anotherUser // you can't use condition statement in elevated expressions
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
