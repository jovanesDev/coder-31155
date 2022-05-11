import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

const ItemListContainer = () => {

    const [state,setState] = useState([])

    const data = [
        {
            id:1,
            name:'GOD OF WAR',
            stock:10,
            price:1500
        },
        {
            id:2,
            name:'HALO',
            stock:8,
            price:1500
        }
    ]



    useEffect(() => {

        const promise = new Promise ((resolve,reject) => {

            setTimeout(() => {
                resolve(data)
            }, 2000);
        })

        promise.then((res) => setState(res))


    }, [])
    
  return (
    <div>
        <Link to={'/card'} >Carrito</Link>
        {state.length > 0 ? state.map (({id,name,stock,price},key) => (
            <Item  id={id} name={name} stock={stock} price={price} />
        )) : <h1>Cargandoo...</h1> 
    
    }
    </div>
  )
}

export default ItemListContainer