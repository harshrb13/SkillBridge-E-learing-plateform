import React from 'react'
import ErrorImg from '../assets/Images/Error.png'

const Error = () => {
  return (
    <div className='flex flex-col p-4 justify-center items-center text-3xl text-white place-items-center'>
        <img className='opacity-60 sm:w-[30rem]' src={ErrorImg} alt="" />
        <p className='text-center uppercase text-richblack-500 ' style={{fontFamily:"monospace",fontWeight:"lighter"}}>Some feartures under maintenance</p>
    </div>
  )
}

export default Error