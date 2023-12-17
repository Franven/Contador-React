import { useMemo, useState } from "react";

export const CalculosPesados = () => {
  const [listaDeNumeros, setListaDeNumeros] = useState([1, 2, 3, 4, 5]);
  const [swosh, setswosh] = useState(true);

  const getCalculo = (listaDeNumeros) =>
    useMemo(() => {
      return listaDeNumeros.reduce((a, b) => a * b);
    }, [listaDeNumeros]);

  const agregarNumero = () => {
    const ultimoNumero = listaDeNumeros.length
    console.log(ultimoNumero)
    setListaDeNumeros([
      ...listaDeNumeros, ultimoNumero]);
    console.log(ultimoNumero);
  };
  return (
    <>
      <h2>CalculosPesados</h2>
      <h4>{getCalculo(listaDeNumeros)}</h4>
      <button onClick={() => setswosh(!swosh)}>
        {swosh ? "show" : "hice"}
      </button>
      <button onClick={agregarNumero}>Agregar Numero</button>
    </>
  );
};
