import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
  {
    Logo: Logo1,
    heading:"Leadership",
    Description:"Fully commited to the success company",
  },
  {
    Logo: Logo2,
    heading:"Foundation",
    Description:"Build the core platform and curate leadership-specific content.",
  },
  {
    Logo: Logo3,
    heading:"Growth",
    Description:"Attract users and enhance platform functionality.",
  },
  {
    Logo: Logo4,
    heading:"Maturity",
    Description:"Scale the platform and diversify content offerings.",
  },
]

const TimeLineSection = () => {
  return (
    <div>
      <div className='flex md:relative md:flex-row flex-col-reverse gap-14 items-center '>

        <div className='w-[45%] flex flex-col gap-5'>
          {
            timeline.map( (element, index) => {
              return (
                <div className='flex flex-row gap-6'key={index}>
                  <div className='w-[50px] h-[50px] bg-white flex items-center'>
                    <img alt='' src={element.Logo}/>
                  </div>

                  <div>
                    <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                    <p className='text-base'>{element.Description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className=' shadow-blue-200'>
          <img alt='' src={timelineImage}
          className='shadow-white object-cover h-fit'/>
        </div>

        <div className='md:absolute top-[10rem] right-[3rem] bg-caribbeangreen-700 flex flex-row text-white uppercase py-5 md:py-10 
              left-[30%] md:translate-x-[6%] md:translate-y-[200%]'>
          <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-6'>
            <p className=' text-2xl sm:text-3xl font-bold'>10</p>
            <p className='text-caribbeangreen-300 text-[3vw] sm:text-sm'>Years of Experince</p>
          </div>

          <div className='flex gap-5 items-center px-7'> 
            <p className='text-2xl sm:text-3xl font-bold'>250</p>
            <p className='text-caribbeangreen-300 text-[3vw] sm:text-sm'>Type of Courses</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default TimeLineSection