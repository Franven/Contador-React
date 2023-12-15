import { useState } from "react";

export const useContador = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = (num = 1) => {
    setContador(contador + num);
  };
  const resetear = () => {
    setContador(0);
  };
  const decrementar = (num = 1, negativo = true) => {
    if (!negativo && contador - num < 0) {
      setContador(0);
      return;
    }
    setContador(contador - num);
  };

  return {
    contador,
    incrementar,
    resetear,
    decrementar,
  };
};
