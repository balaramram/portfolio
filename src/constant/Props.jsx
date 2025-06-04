

export const Skills = ({skillName,persentage}) =>{
    return(
    <div className="border rounded-full py-1 px-3 w-50 flex justify-between items-center text-white hover:w-48 hover:text-gray-400 transition-all duration-300 ">
        <p>{skillName}</p>
        <p>{persentage}%</p>
    </div>
    )
}


export const Details = ({lable,value}) => {
    return (
        <div className="pb-20 md:pb-15">
            <div className="border rounded-md p-2 md:w-90 absolute mt-3.5">
                <p className="font-medium ">{value}</p>
            </div>
            <p className="absolute bg-[#B3C2C1] ms-2">{lable}</p>
        </div>
    )
}