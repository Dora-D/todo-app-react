import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { createNewTodoId } from "../../utils/createNewTodoId";
import { ITodos } from "../../interfaces/index";
import "./task-creator.scss";

interface ITaskCreator {
  setTodos: Dispatch<SetStateAction<ITodos[]>>;
}

export const TaskCreator: FC<ITaskCreator> = ({ setTodos }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: ITodos) => {
    setTodos((todos) => [
      ...todos,
      {
        id: createNewTodoId(todos),
        title: data.title,
        done: false,
      },
    ]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="task-creator">
      <div className="task-creator__wrapper">
        <input
          {...register("title", {
            maxLength: 100,
            validate: (value) => value.trim().length > 2,
          })}
          className={errors.title ? "error" : ""}
          placeholder="Add your new todo"
        />
        <button type="submit"></button>
      </div>

      {errors.title?.type === "validate" && (
        <span>The entry must be more than 3 characters</span>
      )}
      {errors.title?.type === "maxLength" && (
        <span>The entry can't be more than 100 characters</span>
      )}
    </form>
  );
};
