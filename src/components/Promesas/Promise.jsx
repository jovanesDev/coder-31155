import React from "react";

const Promesa = ({ juegos }) => {
  return (
    <>
      {juegos.length > 0 ? (
        juegos.map((juego, index) => (
          <>
            <h1 key={index}>{juego.nombre}</h1>
            {/* <Item nombre={juego.nombre} descripcion={juego.descr} /> */}
          </>
        ))
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

/* 
    <ItemListContainer /> => <ItemList/> => X * <Item/>

*/

export default Promesa;
