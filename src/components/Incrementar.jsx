import React from "react";
// para que no se redibuje la funcion siempre que se hace click y memorizar lo que ingresa 
export const Incrementar = React.memo(({ incrementar }) => {
  return <button onClick={() => incrementar(55)}>Incrementar</button>;
});
