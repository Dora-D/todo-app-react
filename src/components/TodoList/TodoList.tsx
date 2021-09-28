import { FC } from "react";

import "./todo-list.scss";

export const TodoList: FC = ({ children }) => {
  return <ul className="todo-list">{children}</ul>;
};
