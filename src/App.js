import React, { useState } from "react";

function App() {
  const [numBoxes, setNumBoxes] = useState(0);
  const [boxArray, setBoxArray] = useState([]);

  const handleInputChange = (e) => {
    setNumBoxes(parseInt(e.target.value));
  };

  const handleButtonClick = () => {
    const boxes = Array.from({ length: numBoxes }, (_, index) => index + 1);
    setBoxArray(boxes);
  };

  return (
    <div>
      <input type="number" onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Create Boxes</button>
      <div>
        {boxArray.map((box) => (
          <div
            key={box}
            style={{
              width: "50px",
              height: "50px",
              background: "red",
              margin: "5px"
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
