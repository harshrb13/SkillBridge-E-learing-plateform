import React from 'react'

import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
    
  return (
    <div className={`sm:w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
         ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
         : "bg-richblack-800"
    } text-richblack-25 h-[300px] box-border cursor-pointer`}
    onClick={() =>  setCurrentCard(cardData?.heading)}
    >
            <div className='flex flex-col gap-3 border-b-[2px] border-richblack-400 border-dashed h-[80%]} p-6'>
            <div className={`${
                currentCard === cardData?.heading && "text-richblack-800"
            } font-semibold text-[20px]`}>
                {cardData?.heading} 
            </div>
            <div className='text-richblack-400'>{cardData?.description}</div>
        </div>

        <div className={`flex justify-between ${
            currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium`}>
            <div className='flex items-center gap-2 text-[16px]'>
                <HiUsers/>{cardData?.level}
            </div>
            <div className='flex items-center gap-2 text-[16px]'>
                <ImTree/>
                {cardData?.lessionNumber} Lession
            </div>
        </div>
    </div>
  )
}

export default CourseCard