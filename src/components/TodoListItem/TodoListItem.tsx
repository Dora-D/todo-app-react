import { FC } from "react";

import bin from "../../assets/img/bin.svg";
import "./todo-list-item.scss";

interface ITodoListItem {
  title: string;
  done: boolean;
  onDelete: () => void;
  onTaskDone: () => void;
}

export const TodoListItem: FC<ITodoListItem> = ({
  title,
  done,
  onDelete,
  onTaskDone,
}) => (
  <li className="todo-list-item">
    <span title={title} className={done ? "done" : ""} onClick={onTaskDone}>
      {title}
    </span>
    <button onClick={onDelete}>
      <img src={bin} alt="bin" />
    </button>
  </li>
);
