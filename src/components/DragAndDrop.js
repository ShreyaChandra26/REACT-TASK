import React, { useState, useEffect } from "react";

function DragAndDrop() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const draggedItemIndex = e.dataTransfer.getData("text/plain");
    const newItems = [...items];
    const removedItem = newItems.splice(draggedItemIndex, 1)[0];
    newItems.splice(index, 0, removedItem);
    setItems(newItems);
  };

  return (
    <div >
      <h1>Drag and Drop</h1>
      <ul style={{width:"100px",marginLeft:"600px"}}>
        {items.map((item, index) => (
          <li style={{backgroundColor:"grey"}}
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDrop;
