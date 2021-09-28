import { ITodos } from "../interfaces/";

export const setTodosToLocalStorage = (todos: ITodos[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
