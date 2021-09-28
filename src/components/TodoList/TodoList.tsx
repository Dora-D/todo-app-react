import { FC } from "react";

import { TodoListItem } from "../TodoListItem/TodoListItem";

import { ITodos } from "../../interfaces";
import "./todo-list.scss";

interface ITodoList {
  todos: ITodos[];
  onDelete: (id: number) => void;
}

export const TodoList: FC<ITodoList> = ({ todos, onDelete }) => {
  console.log(todos);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem {...todo} onDelete={onDelete} key={todo.id} />
      ))}
    </ul>
  );
};
