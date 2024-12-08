import React, { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import "../../.."
// Import required modules
import { FreeMode, Pagination,Navigation } from "swiper/modules"

// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import Course_Card from "./Course_Card"

function Course_Slider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
       <Swiper
       className="mySwiper"
       loop={Courses.length > 3} // Enable loop only if there are more than 3 slides
       slidesPerView={1}
       spaceBetween={25}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       navigation={true}
       pagination={{
         clickable: true,
       }}
       modules={[FreeMode, Pagination]}
       breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
       }}
     >
          {Courses?.map((course, i) => (
            <SwiperSlide  key={i} className=" mb-10 bg-richblack-800 p-5 rounded-lg "  >
              <Course_Card  course={course} Height={"h-[200px] sm:h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-pink-400">No Course Found</p>
      )}
    </>
  )
}

export default Course_Slider
