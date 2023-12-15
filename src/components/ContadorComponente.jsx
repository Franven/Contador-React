import React from "react";
import { useContador } from "../hooks/useContador";
import "../style/contadorComponente.css";
export const ContadorComponente = () => {
  const { contador, incrementar, resetear, decrementar } = useContador(0);

  return (
    <>
      <div className="container">Contador : {contador}</div>
      <div className="btns">
        <button className="btn btn-primary" onClick={() => incrementar(1)}>
          +1
        </button>
        <button className="btn btn-danger" onClick={() => resetear()}>
          reset
        </button>
        <button
          className="btn btn-primary"
          onClick={() => decrementar(1, false)}
        >
          -1
        </button>
      </div>
    </>
  );
};
