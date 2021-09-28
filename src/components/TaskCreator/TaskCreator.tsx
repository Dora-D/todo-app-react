import React, { Dispatch, FC, SetStateAction } from "react";
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
  } = useForm();

  const onSubmit = (data: ITodos) => {
    setTodos((todos) => [
      ...todos,
      {
        title: data.title,
        id: createNewTodoId(todos),
      },
    ]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="task-creator">
      <div className="task-creator__wrapper">
        <input {...register("title", { required: true, minLength: 3 })} />
        <button type="submit"></button>
      </div>
      {errors.title && <span>The entry must be more than 3 characters</span>}
    </form>
  );
};
