import React from "react";

const Promesa = ({ juegos }) => {
  return (
    <>
      {juegos.length > 0 ? (
        juegos.map((juego, index) => (
          <>
            <h1 key={index}>{juego.nombre}</h1>
          </>
        ))
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default Promesa;
