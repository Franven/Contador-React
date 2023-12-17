import { useCallback } from "react";
import { Incrementar } from "./Incrementar";
import { useState } from "react";

export const CallBackComponente = () => {
  const [contador, setContador] = useState(0);

  // para que se memorice la CallBack. importante 'contador' de use state por que guarda contador. por eso hacer funcion flecha.
  const incrementarPadre = useCallback((val) => {
    setContador((counter) => counter + val);
  }, []);
  return (
    <>
      <h1>contador: {contador}</h1>
      <Incrementar incrementar={incrementarPadre} />
    </>
  );
};
