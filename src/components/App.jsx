import React, { useState } from "react";

function App() {
  const [inputItem, setInputItem] = useState([]);
  const [arr, newArr] = useState([]);

  function updateItem(event) {
    const newInput = event.target.value;
    setInputItem(newInput);
  }

  function addItem() {
    newArr((prev) => {
      return [...prev, inputItem];
    });
    setInputItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputItem} onChange={updateItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
