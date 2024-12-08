import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/Homepage/HighlightText'
import CTAButton from '../components/core/Homepage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/Homepage/CodeBlocks'
import TimeLineSection from '../components/core/Homepage/TimeLineSection'
import LearningLanguageSection from '../components/core/Homepage/LearningLanguageSection'
import InstructorSection from "../components/core/Homepage/InstructorSection"
import Footer from "../components/common/Footer"
import ExploreMore from '../components/core/Homepage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
    
  return (
    <div>
        {/* Section-1 */}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between overflow-auto mb-10'>

        <Link to={"/signup"}>
            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
            </div>

        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with
            <HighlightText text={"Coding Skills"} />
        </div>

        <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                Buy Now
            </CTAButton>
        </div>
        

        <div className='mx-3 my-12 shadow-white shadow-[_25px_15px_rgba(0,_98,_90,_0.05)]'>
            <video
            muted
            loop
            autoPlay
            >
            <source  src={Banner} type="video/mp4" />
            </video>

            
        </div>
        
        
        
        {/* Code Section 1 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row flex-col"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n/head>\n</body>\n<h1><ahref="/">Header</a>\n</h1>\nnav><ahref="one/">One</a><ahref="two/">Two\n</a><ahref="three/">Three</a>\n</nav>`}
                codeColor={"text-yellow-25"}
            />
        </div>
            


        <ExploreMore/>
      </div>

        {/* Section-2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>

                <div className='w-11/12 max-w-maxContent flex items-center gap-5 mx-auto '>

                    {/* <div className='flex flex-row gap-7 text-white mx-auto mt-[100px]'>

                        <CTAButton active={true} linkto={"/signup"} >
                            <div className='flex items-center gap-2'>
                            Explore Full Catalog
                            <FaArrowRight/>
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkto={'/signup'}>
                            <div>
                                Learn More
                            </div>
                        </CTAButton>
                    </div> */}
                </div>

            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col  items-center justify-between gap-7'>

                <div className='flex flex-col sm:flex-row gap-5 mb-10 mt-[95px] '>
                    <div className='text-4xl text-center sm:text-start font-semibold sm:w-[45%]'>
                       Get the skills you need for a
                      <HighlightText text={"job that is in demand."}/>
                    </div>

                    <div className='flex flex-col items-center gap-10 text-center sm:text-start sm:w-[40%] sm:items-start'>
                      <p className='text-[16px]'>
                          The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                      </p>
  
                      <CTAButton active={true} linkto={"/signup"}>
                          Learn more
                      </CTAButton>
                    </div>

                </div>

                <TimeLineSection/>

                <LearningLanguageSection/>
 
                
            </div>

            

        </div>

        {/* Section-3 */}
       
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8
          bg-richblack-900 text-white'>

            <InstructorSection/>

            {/* <h2 className='text-center text-4xl font-semibold mt-10'>Reviews from other learners</h2> */}
            <div className='font-semibold text-center text-4xl  mt-10'>Reviews from other learners</div>

            {/* review slider */}
            <ReviewSlider/>
            
        </div>

        {/* Footer */}
        <Footer/>
        
    </div>
  )
}

export default Home