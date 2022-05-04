import React from 'react'
import Item from './Item'

const Home = () => {

  const items = [
    {
      id:1,
      
    },
    {
      id:2
    },
    {
      id:3
    }
  ]

  return (
    <div>
        {items.map((item) => (
          <Item key={item.id} id={item.id}/>
        ))}
    </div>
  )
}

export default Home