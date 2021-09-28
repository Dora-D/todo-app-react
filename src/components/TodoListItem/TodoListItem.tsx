import { FC, useState } from "react";

import bin from "../../assets/img/bin.svg";
import "./todo-list-item.scss";

interface ITodoListItem {
  id: number;
  title: string;
  onDelete: (id: number) => void;
}

export const TodoListItem: FC<ITodoListItem> = ({ title, onDelete, id }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isPerformed, setIsPerformed] = useState<boolean>(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const onTitileClick = () => setIsPerformed((prev) => !prev);

  return (
    <li
      className="todo-list-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p
        title={title}
        onClick={onTitileClick}
        className={isPerformed ? "" : "active"}
      >
        {title}
      </p>
      <button onClick={() => onDelete(id)} className={isHover ? "active" : ""}>
        <img src={bin} alt="bin" />
      </button>
    </li>
  );
};
