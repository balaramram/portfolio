import React, { useState } from 'react'
import upArrow from "../assets/svg/up_arrow.svg"
import downArrow from "../assets/svg/down_arrow.svg"
import { DropDownItem } from "../constant/Item.js"

const Internship = () => {
    const [isExpanded, setIsExpanded] = useState({});

    const ToggleDropDown = (section) => {
        setIsExpanded(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    }

    return (
        <div className="max-w-7xl h-screen mx-auto">
            <p className="font-extrabold text-gray-200 text-9xl m-20 absolute">02</p>
            <div className="absolute p-5 md:p-15 lg:p-20 xl:m-35 xl:p-0">

                <p className="pl-4 absolute text-orange-500">Internship</p>
                <div className="md:grid md:grid-cols-2 gap-5">
                    <div>
                        <p className="font-medium text-4xl py-8 md:py-12 xl:pr-30">
                            Frontend intern with a love for design & code.
                        </p>
                        <p>
                            I recently completed a Frontend Development Internship where I gained hands-on experience in 
                            building responsive and user-friendly web interfaces. During the internship, I worked with 
                            HTML, JavaScript, and Tailwind CSS to develop and maintain frontend components. I improved 
                            my understanding of UI/UX principles, and learned how to write clean, maintainable code. 
                            This experience helped me enhance both my technical and teamwork skills, and gave me confidence 
                            to take on real-world projects.
                        </p>
                    </div>
                    <div className="w-full h-full p-10 flex flex-col justify-center gap-10 border-l-4 xl:ps-20">
                        {DropDownItem.map((item, index) => (
                            <div className='overflow-hidden' key={index}>
                                <div 
                                    onClick={() => ToggleDropDown(item.firstLevel)} 
                                    className="flex items-center gap-5 w-full cursor-pointer"
                                >
                                    <p className="font-bold text-xl xl:text-2xl pb-2">{item.firstLevel}</p>
                                    <img 
                                        src={isExpanded[item.firstLevel] ? upArrow : downArrow} 
                                        className="size-5 transition-all duration-300" 
                                    />
                                </div>

                                <div className={`ps-6 pt-1 absolute transition-all duration-300 overflow-hidden ${isExpanded[item.firstLevel] ? "h-max" : "h-0"}`}>
                                    <p className="text-md xl:text-xl">{item.secondLevel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internship
