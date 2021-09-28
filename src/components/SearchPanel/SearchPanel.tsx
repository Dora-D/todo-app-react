import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import "./search-panel.scss";

interface ISearchPanel {
  inputSearchTodos: string;
  setInputSearchTodos: Dispatch<SetStateAction<string>>;
}

export const SearchPanel: FC<ISearchPanel> = ({
  inputSearchTodos,
  setInputSearchTodos,
}) => {
  const hendleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputSearchTodos(e.target.value);

  return (
    <input
      type="text"
      className="search-panel"
      value={inputSearchTodos}
      onChange={hendleChange}
      placeholder="Search"
    />
  );
};
