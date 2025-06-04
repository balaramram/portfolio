import React from 'react'
import { Details } from '../constant/Props'
import { DetaisValue } from '../constant/Item'
import Email from "../assets/svg/email.svg"
import Insta from "../assets/svg/instagram.svg"
import Linkedin from "../assets/svg/linkedin.svg"
import Location from "../assets/svg/location.svg"
import WhatsApp from "../assets/svg/whatsapp.svg"


const PersonalDetails = () => {
  return (
    <div className="h-screen  xl:p-20">
        <div className="lg:pt-20 xl:pt-0">
            <p className="font-extrabold text-gray-200 text-9xl absolute">04</p>
            <p className="m-14 ps-5 text-orange-500 absolute">Personal Details</p>
        </div>

        <div className="bg-[#B3C2C1] h-max md:grid grid-cols-2 pt-30 p-5 lg:pt-35 xl:p-10 xl:mt-35">

            <div>
                {DetaisValue.map((item,i)=>(    
                    <div>
                        <Details lable={item.label} value={item.value} />
                    </div>
                ))}
            </div>

            <div>
                <div className='md:ps-10'>
                    <p className="border-b-2 w-max mb-2 leading-4 font-medium">Address</p>
                    <p className="flex flex-col ps-5">12/95,Elanthaiyadi Vilai,<span>Kanyakumari,</span>Tamil Nadu,<span>India</span></p>
                </div>
                <div className="md:ps-10 py-2">
                    <p className="border-b-2 w-max mb-2 leading-4 font-medium">Contact</p>
                    <div className="pt-4 flex gap-5">
                        <img src={WhatsApp} onClick={()=>{window.open("https://wa.me/919488532629", "_blank");}} className="w-8 cursor-pointer"  />
                        <img src={Email} onClick={()=>{window.location.href = "mailto:balaram1327r@gmail.com?subject=Subject&body=Body"}} className="w-8 cursor-pointer"  />
                        <img src={Linkedin} onClick={()=>{window.open("https://www.linkedin.com/in/bala-ram-5974ab326/")}} className="w-8 cursor-pointer"  />
                        <img src={Insta} onClick={()=>window.open("https://www.instagram.com/deal_tutor/")} className="w-8 cursor-pointer"  />
                        <img src={Location} onClick={()=>{window.open("https://www.google.com/maps/place/Elanthaiyadivilai+MPN+water+service/@8.0911555,77.5123241,20.13z/data=!4m6!3m5!1s0x3b04ed7fa4e390d7:0x4dd465b61a8554e8!8m2!3d8.0909805!4d77.512589!16s%2Fg%2F11lllr0hdm?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D")}} 
                        className="w-8 cursor-pointer"  />
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PersonalDetails