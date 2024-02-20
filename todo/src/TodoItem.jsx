export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo}) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => editTodo(id)}>edit</button>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
}
