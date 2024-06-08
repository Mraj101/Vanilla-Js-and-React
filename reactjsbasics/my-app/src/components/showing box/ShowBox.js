import React, { useState } from "react";

function ShowBox() {
  const [boxes, setBoxes] = useState([]);

  function handleBoxClick() {
    setBoxes([...boxes, "green", "yellow"]);
  }

  function handleBoxClose(index) {
    setBoxes(boxes.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        onClick={handleBoxClick}
      ></div>
      {boxes.map((color, index) => (
        <div
          key={index}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            marginTop: "10px",
          }}
          onClick={() => handleBoxClose(index)}
        ></div>
      ))}
    </div>
  );
}

export default ShowBox;
