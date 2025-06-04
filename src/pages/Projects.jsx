import React from 'react'
import TeaShop from "../assets/jpg/tea shop.jpg"
import DashBoard from "../assets/jpg/dashboard.jpg"

const Projects = () => {

     const HandleClick1 = () => {
        window.open("https://teashopbybala.netlify.app/");
        };
    
    const HandleClick2 = () => {
        window.open("https://minimaldashboardbybalaram.netlify.app/");
    }


  return (
    <div>
        <div className="lg:pt-15 xl:p-20 max-w-7xl h-screen">
            <div className=" absolute">
                <p className="font-extrabold text-gray-200 text-9xl absolute">03</p>
                <p className="pt-15 xl:m-14 xl:pt-0 ps-9 text-orange-500 absolute flex flex-col">Projects <span>click on image</span></p>
                <div className='w-5.5xl'>
                    <div className="m-5 pt-5 md:m-10 md:pt-20 xl:m-22 xl:pt-0 md:grid md:grid-cols-2 gap-5">
                        <div className="w-full pb-15 md:pb-0">
                            <p className="text-center pb-2 text-xl font-bold pt-25 md:pt-0">Tea Shop</p>
                            <div className="h-80 overflow-hidden">
                                <img onClick={HandleClick1} src={TeaShop} className="h-83 brightness-80 hover:brightness-50 hover:h-80 transition-all duration-300 cursor-pointer" />
                            </div>
                            <p className="text-center">A fully responsive, single-page React application developed using Vite and Tailwind CSS. 
                                This project showcases a modern UI for an online tea store, featuring clean layout, product sections, 
                                and an engaging user experience.
                                </p>
                        </div>

                        <div className="w-full">
                            <p className="text-center pb-2 text-xl font-bold">DashBoard</p>
                            <div className="h-80 overflow-hidden">
                                <img onClick={HandleClick2} src={DashBoard} className="h-83 brightness-80 hover:brightness-50 hover:h-80 transition-all duration-300 cursor-pointer" />
                            </div>
                            <p className="text-center">Minimal Dashboard is a responsive admin panel built with React, Vite, and Tailwind CSS. 
                                It includes sidebar navigation, summary widgets, and a clean, modern layout. The project showcases my 
                                frontend development skills and is deployed on Netlify.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects