import React from "react";

import { Header } from "../Header/Header";
import { MainContent } from "../MainContent/MainContent";

import "./app.scss";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
    </div>
  );
};
