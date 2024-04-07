import React from 'react'
import Nav from '../Components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainLayouts = () => {
  return (
    <div>
        <Nav/>
        <div className='min-h-[calc(100vh-116px)] '>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayouts