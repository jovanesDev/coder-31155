import React,{useState,useEffect} from 'react'

const CicloDeVida = () => {

    const [nombre,setNombre] = useState("Julio")

    //console.log("Componente se inicio")

    useEffect(() => {
        // aca es cuando el componente nace o (parecido al docuemnte.ready() de javascript)
      console.log('el componente esta listo')
    
      return () => {
        console.log('El componente murio')
        alert("Me mataron")
      }
      // estos corrchetes son las dependencias del useEffect que obligarian a volver a 
      // renderizar el componente
    }, [nombre])
    


  return (
      <>
        <h1 style={{margin:"100px 0"}}>{nombre}</h1>
        <button onClick={() => setNombre("Jorge")}>Cambiar Nombre</button>
      </>
  )
}

export default CicloDeVida

// Ciclo de vida de un componente define un hook que se llama useEffect
// UseEffect tiene 3 estados :
// 1) cuando el componente nace o esta listo 
// 2) cuando sucede un cambio en el componente 
// 3) cuando el componente muere o se destruye 