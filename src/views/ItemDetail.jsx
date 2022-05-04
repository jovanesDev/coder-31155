import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ItemDetail = () => {

  const location = useLocation()
  const {id} = useParams()

  console.log(location)
  //console.log("location",location)
  //console.log("params",params)

  return (
    <div>
      <h1>ItemDetail + {id}</h1>
    </div>
  )
}

export default ItemDetail