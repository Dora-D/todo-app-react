import { useEffect, useState } from "react";

import { TaskCreator } from "../TaskCreator/TaskCreator";
import { TodoList } from "../TodoList/TodoList";
import { TodoListItem } from "../TodoListItem/TodoListItem";

import { BaseTodos } from "../../static/index";
import { setTodosToLocalStorage } from "../../utils/setTodosToLocalStorage";
import { ITodos } from "../../interfaces";

import emptyStateIcon from "../../assets/img/empty-state-icon.svg";
import "./todo-app.scss";

export const TodoApp = () => {
  const [todos, setTodos] = useState<ITodos[]>(BaseTodos);

  useEffect(() => {
    setTodosToLocalStorage(todos);
  }, [todos]);

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

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TaskCreator setTodos={setTodos} />
      <TodoList>
        {todos.length === 0 ? (
          <img src={emptyStateIcon} alt="Empty State" />
        ) : (
          todos.map((todo) => (
            <TodoListItem
              {...todo}
              onDelete={() => onDelete(todo.id)}
              onTaskDone={() => onTaskDone(todo.id)}
              key={todo.id}
            />
          ))
        )}
      </TodoList>
    </div>
  );
};
