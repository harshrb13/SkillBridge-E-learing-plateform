import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import RatingStars from "../../common/RatingStars"
import GetAvgRating from "../../../utils/avgRating"

function Course_Card({ course, Height }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  // console.log(course.ratingAndReviews)
  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews)
    setAvgReviewCount(count)  // Ensure no NaN values
  }, [course])
  // console.log(avgReviewCount)
  return (
    <Link to={`/courses/${course._id}`} className="bg-richblack-800 p-5 rounded-lg">
      <div className="rounded-lg">
        <img
          src={course?.thumbnail}
          alt="course thumbnail"
          className={`${Height} w-full rounded-xl object-cover`}
        />
      </div>
      <div className="flex flex-col gap-2 px-1 py-3">
        <div className="text-xl flex   text-richblack-5">
          <p className=" text-nowrap  overflow-hidden">
          {course?.courseName}
          </p>
          <span>...</span>
        </div>
        <p className="text-sm text-richblack-50">
          {course?.instructor?.firstName} {course?.instructor?.lastName}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-yellow-5">{avgReviewCount || 0}</span>
          <RatingStars Review_Count={avgReviewCount} />
          <span className="text-richblack-400">
            {course?.ratingAndReviews?.length} Ratings
          </span>
        </div>
        <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
      </div>
    </Link>
  )
}

export default Course_Card
