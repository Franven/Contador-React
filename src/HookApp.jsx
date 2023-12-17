import React from "react";
import { ListaTareas } from "./components/ListaTareas";
import "./style/HooksApp.css";

export const HooksApp = () => {
  return (
    <>
      <h2 className="title">Aplicacion de Hooks</h2>
      <hr />
      <ListaTareas />
    </>
  );
};
