import React, { useState } from "react";
import CicloDeVida from "../CicloDeVida/CicloDeVida";

const HookState = ({usuario}) => {
  // const [numero , setNumero] = useState(0)
  // const [estado , setEstado] = useState("")

  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("Alejandra");
  const [ciclo, setCiclo] = useState(true)


  function sumar(params) {
      setContador(contador + 1)
  }


  function restar(params) {

    if(contador > 1) {

        setContador(contador - 1)
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "40px 0",
          width: "500px",
          justifyContent: "space-around",
        }}
      >
        <button onClick={restar}>restar 1</button>
        <h1>contador es : {contador}</h1>
        <button onClick={sumar}>sumar 1</button>

      </div>
        <div>
          <h1>{nombre}</h1>
          <button onClick={() => setNombre(usuario)}>Cambiar Nombre</button>
        </div>

        <div>
           {ciclo && <CicloDeVida/>}
            <button onClick={()=>setCiclo(false)}>Matar al Ciclo </button>
        </div>
    </div>
  );
};

export default HookState;

// un state es un "Hook" que me permite almacenar valores !
// el state tiene 2 componentes principales
// 1) el state en si  => en mi caso se llama "contador"
// 2) la funcion que me cambiaria el valor => en mi caso setContador
