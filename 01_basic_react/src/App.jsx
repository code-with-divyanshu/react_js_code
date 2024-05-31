import Chai from "./Chai";

function App() {
  const username = "Folder";
  return (
    <>
      {/* you can't use condition statement on elevated expressions in reactjs */}
      <h1>React Basic {username}</h1>
      {/* learn how to make a react-app using npx create-react-app and npm create vite@latest */}
      <Chai />
    </>
  );
}

export default App;
