import React, { useEffect, useState } from "react";
import {
  getTodos,
  deleteTodo,
  markTodoAsCompleted
} from "../api";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      console.error("Fehler beim Laden:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const createTodo = async (id) => {
    const newTodo = {
      title: "Neues Todo",
      description: "Beschreibung des neuen Todos"
    };
    await createTodo(newTodo);
    fetchTodos();
  }

  const handleComplete = async (id) => {
    await markTodoAsCompleted(id);
    fetchTodos();
  };

  return (
    <div>
      <h2>📝 Meine Todos</h2>
      <button onClick={fetchTodos}>🔄 Aktualisieren</button>
      <button onClick={() => setTodos([])}>🗑️ Alle Todos löschen</button>
      <button onClick={() => createTodo([])}> Todo hinzufügen</button>
      {todos.length === 0 && <p>Keine Todos vorhanden</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <strong>{todo.title}</strong> – {todo.description}
            {todo.completed ? " ✅ erledigt" : ""}
            <br />
            <button onClick={() => handleDelete(todo._id)}>🗑️ Löschen</button>
            {!todo.completed && (
              <button onClick={() => handleComplete(todo._id)}>✔️ Abschließen</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
