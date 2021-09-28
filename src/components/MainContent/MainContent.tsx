import Particles from "react-particles-js";

import { TodoApp } from "../TodoApp/TodoApp";
import particlesOption from "../../assets/particles/particles.json";

import "./main-content.scss";

export const MainContent = () => {
  return (
    <div className="main-content">
      <TodoApp />
      <Particles className="main-content__particles" params={particlesOption} />
    </div>
  );
};
