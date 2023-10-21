export default function List({ items, onRemoveItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.value}
          <button onClick={() => onRemoveItem(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
