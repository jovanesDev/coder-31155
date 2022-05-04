import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>

    <Outlet/>
    {/* <Route index element={<Home/>}/> */}
    {/* <Route path="/card" element={<Card/>}/>*/}
    {/* <Route path="/checkout" element={<Checkout/>}/>*/}
    {/* El Outlet estaria remplazando a los routes que estan adentro del Route que carga el Layout */}
   <Footer/>
    </>
  )
}

export default Layout