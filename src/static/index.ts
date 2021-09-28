import { ITodos } from "../interfaces/index";

export const BaseTodos: ITodos[] =
  JSON.parse(localStorage.getItem("todos")) || [];
