import React from 'react'
import logo from "../assets/jpg/logo.jpg"
import { Link } from 'react-router-dom'
import Projects from '../pages/Projects'
import resume from "../assets/pdf/Bala Ram S Resume Frontend Developer.pdf"

const NavBar = () => {
  return (
    <div className="bg-transparent fixed lg:flex justify-between lg:w-[50rem] xl:w-[76.3rem] px-20 py-5 items-center font-medium text-blue-950">
      <div className="lg:flex items-center gap-5">
        <img className="rounded-full w-10 " src={logo} />
        <Link className="hover:border-b transition-all duration-300" to="/">Home</Link>
        <Link className="hover:border-b transition-all duration-300" to="/about">About</Link>
        <Link className="hover:border-b transition-all duration-300" to="/internship">Internship</Link>
        <Link className="hover:border-b transition-all duration-300" to="/project">Project</Link>
        <Link className="hover:border-b transition-all duration-300" to="/personal details">Personal Details</Link>
        
      </div>

      <div className="border hover:border-white hover:text-white  p-2 w-max">
        <a href={resume} download>
        <p className="">Download CV</p>
        </a>
      </div>
     
    </div>
  )
}

export default NavBar