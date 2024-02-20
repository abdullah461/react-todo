import { TodoItem } from "./TodoItem";
import { EditTodo } from "./components/EditTodo";


export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {

 
  return (
    <ul className="list">
      {todos.length === 0 && "No todo"}

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo editTodo={editItem} todo={todo} />
        ) : (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </ul>
  );
}
