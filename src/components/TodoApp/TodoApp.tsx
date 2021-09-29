import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { TaskCreator } from "../TaskCreator/TaskCreator";
import { TodoList } from "../TodoList/TodoList";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import { SearchPanel } from "../SearchPanel/SearchPanel";

import { BaseTodos } from "../../static";
import { setTodosToLocalStorage } from "../../utils/setTodosToLocalStorage";
import { ITodos } from "../../interfaces";

import emptyStateIcon from "../../assets/img/empty-state-icon.svg";
import "./todo-app.scss";

export const TodoApp = () => {
  const [todos, setTodos] = useState<ITodos[]>(BaseTodos);
  const [inputSearchTodos, setInputSearchTodos] = useState<string>("");

  useEffect(() => {
    setTodosToLocalStorage(todos);
  }, [todos]);

  const onDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onTaskDone = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const searchTodos = (items: ITodos[], term: string) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const renderTodos = searchTodos(todos, inputSearchTodos);

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TaskCreator setTodos={setTodos} />
      <TodoList>
        {renderTodos.length === 0 ? (
          <img src={emptyStateIcon} alt="Empty State" />
        ) : (
          <TransitionGroup>
            {renderTodos.map((todo) => (
              <CSSTransition timeout={300} classNames="item" key={todo.id}>
                <TodoListItem
                  {...todo}
                  onDelete={() => onDelete(todo.id)}
                  onTaskDone={() => onTaskDone(todo.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </TodoList>
      <SearchPanel
        inputSearchTodos={inputSearchTodos}
        setInputSearchTodos={setInputSearchTodos}
      />
    </div>
  );
};
