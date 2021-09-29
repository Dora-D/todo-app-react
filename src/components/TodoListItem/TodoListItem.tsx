import { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";

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
}) => {
  const [isButtonShow, setIsButtonShow] = useState<boolean>(false);
  const windowInnerWidth = window.innerWidth;

  if (windowInnerWidth < 960 && !isButtonShow) {
    setIsButtonShow(true);
  }

  const onMouseEnter = () => setIsButtonShow(true);
  const onMouseLeave = () => setIsButtonShow(false);

  return (
    <li
      className="todo-list-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span title={title} className={done ? "done" : ""} onClick={onTaskDone}>
        {title}
      </span>
      <CSSTransition
        classNames="button"
        timeout={300}
        in={isButtonShow}
        unmountOnExit={true}
      >
        <button onClick={onDelete}>
          <img src={bin} alt="bin" />
        </button>
      </CSSTransition>
    </li>
  );
};
