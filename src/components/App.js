import { useState } from "react";
import "../App.css";
import Header from "./Header";
import Input from "./Input";
import List from "./List";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((oldItems) => [...oldItems, item]);
  }

  function handleRemoveItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <Header />
      <Input onAddItems={handleAddItems} />
      <List items={items} onRemoveItem={handleRemoveItem} />
    </div>
  );
}
