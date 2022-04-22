import React from "react";

const Propiedades = ({ titulo, casado, edad, func}) => {
  // nombre y valor \
//   console.log(casado.id)
//   func();

  return (
    <>
      <h1>{edad}</h1>
      <h1>{casado}</h1>
      { casado ? <h1>{titulo}</h1> : null}
    </>
  );
};

export default Propiedades;
