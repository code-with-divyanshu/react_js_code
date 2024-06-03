import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shodow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outlin-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outlin-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outlin-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outlin-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outlin-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outlin-none px-4 py-1 rounded-full text-black shadow-sm"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outlin-none px-4 py-1 rounded-full text-black shadow-sm"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outlin-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outlin-none px-4 py-1 rounded-full text-black shadow-sm"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColor("white")}
              className="outlin-none px-4 py-1 rounded-full text-black shadow-sm"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("black")}
              className="outlin-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
