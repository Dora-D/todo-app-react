import { useState } from "react";

import { TaskCreator } from "../TaskCreator/TaskCreator";
import { TodoList } from "../TodoList/TodoList";

import { ITodos } from "../../interfaces";
import "./todo-app.scss";

export const TodoApp = () => {
  const [todos, setTodos] = useState<ITodos[]>([
    {
      title: "todo one",
      id: 100,
    },
  ]);

  const onDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TaskCreator setTodos={setTodos} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
};
