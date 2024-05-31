function customRender(reactElement, container) {
  // this is not best way beacuse every time use to setAttribute for every element

  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.herf);
  //   domElement.setAttribute("target", reactElement.children.target);
  //   container.appendChild(domElement);

  // loop base code , best way

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") continue; // if prop attr have h children element
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    herf: "https://google.com",
    target: "_blank",
  },
  children: "Visit Google",
}; // react give same like this end of the day

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
