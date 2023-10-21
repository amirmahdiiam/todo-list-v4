import { useState } from "react";

export default function Input({ onAddItems }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newItem) return;

    const item = { id: Math.floor(Math.random() * 1000), value: newItem };
    console.log(item);

    onAddItems(item);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
