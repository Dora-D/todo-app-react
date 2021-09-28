import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { ITodos } from "../../interfaces/index";
import "./task-creator.scss";

interface ITaskCreator {
  onSubmit: (data: ITodos) => void;
}

export const TaskCreator: FC<ITaskCreator> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
