import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/Homepage/Button"
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_other from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-24'>
      <div className='flex flex-col gap-5 items-center'>

        <div className='text-4xl text-center font-semibold  '>

          <p>Your swiss knife for
          <HighlightText text={"learning any language"}/>
          </p>
          <p className='text-center text-richblack-600 mx-auto mt-4 text-base font-medium w-[70%]'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>

          <div className='flex flex-row items-center justify-center mt-5'>
            <img  alt='' src={know_your_progress}
            className='object-contain -mr-32'/>
            <img alt='' src={compare_with_other}
            className='object-contain'/>
            <img alt='' src={plan_your_lesson}
            className='object-contain -ml-36'/>
          </div>

          <div className='w-fit mx-auto '>
            <CTAButton active={true} linkto={'/signup'}>
              <div>
                Learn more
              </div>
            </CTAButton>
          </div>
        </div>

      </div>

    </div>
  )
}

export default LearningLanguageSection