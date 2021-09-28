import { useState } from "react";

import { TaskCreator } from "../TaskCreator/TaskCreator";
import { TodoList } from "../TodoList/TodoList";

import { ITodos } from "../../interfaces";
import "./todo-app.scss";
import { TodoListItem } from "../TodoListItem/TodoListItem";

export const TodoApp = () => {
  const [todos, setTodos] = useState<ITodos[]>([
    {
      id: 100,
      title: "todo one",
      done: false,
    },
  ]);

  const onDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onTaskDone = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  console.log(todos);

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TaskCreator setTodos={setTodos} />
      <TodoList>
        {todos.map((todo) => (
          <TodoListItem
            {...todo}
            onDelete={() => onDelete(todo.id)}
            onTaskDone={() => onTaskDone(todo.id)}
            key={todo.id}
          />
        ))}
      </TodoList>
    </div>
  );
};
