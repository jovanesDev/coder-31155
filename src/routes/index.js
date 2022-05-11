import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Card from '../components/Card/Card'
import ItemListContainer from '../components/ItemListoContainer/ItemListContainer'


const RutasComp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<ItemListContainer/>}/> 
            <Route path='/card'element={<Card/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RutasComp