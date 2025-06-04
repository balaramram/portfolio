import React from 'react'
import personalPhoto from "../assets/jpg/about.jpg"

const About = () => {
  return (
    <div className=" w-full h-screen">
      <div className="md:grid md:grid-cols-3">
        <div className="md:col-span-2 w-full h-screen">
          <p className="font-extrabold text-gray-200 text-9xl absolute m-20">01</p>

          <div className='absolute flex w-screen lg:w-192 h-screen p-5 lg:pt-15 xl:p-30'>
            <div className="">
              <p className="text-orange-500 px-4 pt-5 ">About Me</p>
              <p className="font-medium text-4xl py-7 md:w-100 lg:w-90 xl:w-full">I may be a fresher, but I bring fresh energy and a strong eye for design.</p>
              <p className="md:w-100 lg:w-90 xl:w-full">I'm an aspiring web developer with a focus on frontend technologies.
                Skilled in HTML, CSS, JavaScript, and Tailwind CSS.
                Currently exploring React to build dynamic user interfaces.
                I enjoy designing clean, responsive layouts and smooth user experiences.
                Quick learner with a passion for modern UI/UX trends.
                Always eager to take on real-world projects and grow through hands-on experience.
                I believe great websites come from attention to detail and collaboration.
                Looking for opportunities to contribute and improve my development skills.
                Let’s connect and create something impactful!</p>
            </div>
            
          </div>

          <div className="absolute mt-200 lg:ml-100 xl:ml-165 md:border-2 md:m-40 md:ml-110 md:bg-black">
            <img className="w-70 md:w-50 xl:w-70 p-2" src={personalPhoto} />
          </div>
          
        </div>
        <div className="bg-[#B3C2C1] ">
          
        </div>
      </div>
    </div>
  )
}

export default About