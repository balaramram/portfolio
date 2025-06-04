import React, { useState } from 'react'
import SlideBar from './SlideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className="lg:flex">

      <div className="lg:fixed z-50 lg:w-75 xl:w-75">
        <SlideBar />
      </div>

      <div className="lg:ms-75 xl:ms-75 w-full">
        <div className="absolute z-50 hidden lg:block "><NavBar /></div>
        <main><Outlet/></main>
      </div>

    </div>
  )
}

export default Layout