import React from 'react'
import index from "../assets/jpg/index1..jpg"
import About from './About'
import Internship from './Internship'
import Projects from './Projects'
import PersonalDetails from './PersonalDetails'

const Home = () => {
  return (
    <div>
    <div className="hidden lg:block">
      <div>
        <div className="">
          <img className="w-full md:h-screen object-cover brightness-80 relative" src={index} />
          <div className="absolute inset-0 top-80 left-50">
            <div className="grid grid-cols-2">
              <div></div>
              <div className="text-gray-700 font-bold text-4xl"> 
                <p>Hello! I'm Bala Ram</p>
                <p>Frontend Developer (Fresher)</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    
    <div className="mb-170 md:mb-0">
      <About />
    </div>
    <div className="mb-100 md:mb-0">
      <Internship />
    </div>
    <div className="mb-180 md:mb-20 xl:mb-0">
      <Projects />
    </div>
    
    <PersonalDetails />
    </div>
  )
}

export default Home