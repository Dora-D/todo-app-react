import { ITodos } from "../interfaces/index";
import { getTodosFromLocalStorage } from "../utils/getTodosFromLocalStorage";

export const BaseTodos: ITodos[] = getTodosFromLocalStorage();
