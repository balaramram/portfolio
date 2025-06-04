import React from 'react'
import profile from "../assets/jpg/profile.jpg"
import { Skills } from '../constant/Props'
import { skill } from '../constant/Item'

const SlideBar = () => {
  return (
    <div>
        <div>
            <div className="h-full lg:h-screen bg-black flex flex-col justify-between items-center text-white py-18">

              <div className="flex flex-col items-center">
                <img className="rounded-full size-55 bg-gray-500 p-1" src={profile} />
                <p className="kalam-bold text-3xl pt-5">Bala Ram S</p>
                <p className="kalam-light text-sm pt-2">Frontend Developer</p>
              </div>

              <div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="ps-3 w-">Skills</p>
                  </div>
                  {skill.map((item) => (
                    <Skills skillName={item.skill} persentage={item.persentage}/>
                  ))}
                </div>
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default SlideBar