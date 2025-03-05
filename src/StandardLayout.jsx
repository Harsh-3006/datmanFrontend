import React from 'react'
import Navbar from './components/NAVBAR/Navbar'
import Footer from './components/FOOTER/Footer'
import { Outlet } from 'react-router-dom';


function StandardLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default StandardLayout
