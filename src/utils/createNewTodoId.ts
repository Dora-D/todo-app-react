import { ITodos } from "../interfaces";

export const createNewTodoId = (todos: ITodos[]) => {
  return todos.length === 0 ? 100 : todos[todos.length - 1].id + 1;
};
