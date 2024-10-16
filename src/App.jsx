import React, { useState } from "react";
import Card from "./Components/card";
import Music from "./Components/Music";
function App() {
  const [val, b] = useState({
    name: "Music",
    isBann: false,
  });
  return (
    <div>
      <h1>Value : {val.isBann.toString()}</h1>
      <button
        onClick={() => b({...val, isBann: !val.isBann })}
        className={`${
          val.isBann ? "bg-blue-500" : "bg-red-500"
        } rounded-full px-3 py-2 text-black text-xs`}
      >
        change
      </button>
    </div>
  );
}

export default App;
