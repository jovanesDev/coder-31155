import React from 'react'
import HookState from './HookState/HookState';
import Propiedades from './Props/Example'

const Layout = () => {

    const holaMundo = () => {
        console.log("Hola Mundo");
      };

  return (
    <div>
        
      <Propiedades
        func={holaMundo}
        titulo={"Yo soy Profe"}
        edad={25}
        casado
        perrito={"peluche"}
      />

     <HookState usuario={"Maxi"}/>

    </div>
  )
}

export default Layout