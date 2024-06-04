# notes for password generator app

## app js

```javascript
function App() {
  return (
    <>
      <div className="w-full  max-w-sm mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-600">
        <h1 className="text-4xl text-center text-white my-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3"
            placeholder="password"
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={50} />
            <label>Lenth:{length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" />
            <label htmlFor="charInput">Charaters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
```
