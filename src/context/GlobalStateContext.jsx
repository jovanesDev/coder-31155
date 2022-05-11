import React, { createContext, useState } from 'react'

// nombre del context que estan creando 
export const GlobalContext = createContext('')

const GlobalProvider = ({children}) => {
    // este componente sera el responsable de proveer info y almacenar info 
    const [carrito, setCarrito] = useState([])

    const AddToCard = (producto) => {
        setCarrito([...carrito,producto])
    }

    const clear = () => setCarrito([])



  return (
    <GlobalContext.Provider value={{carrito,AddToCard}}>
            {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider