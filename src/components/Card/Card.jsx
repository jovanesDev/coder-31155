import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'

const Card = () => {

  const {carrito} = useContext(GlobalContext)

  return (
    <ul>
      {carrito.length > 0 ? carrito.map((item,index) => (
        <li key={index}>{item.name}</li>
      )) : <h1>Carrito esta vacio </h1>}
    </ul>
  )
}

export default Card