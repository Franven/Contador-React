import React from "react";
import { ContadorComponente } from "./components/ContadorComponente";
import "./style/HooksApp.css";

export const HooksApp = () => {
  return (
    <>
      <h2 className="title">Aplicacion de contador</h2>
      <hr />
      <ContadorComponente />
    </>
  );
};
