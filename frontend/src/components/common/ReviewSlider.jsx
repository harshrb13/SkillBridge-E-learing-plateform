import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../App.css";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/apis";
import RatingStars from "./RatingStars";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 15;

  useEffect(() => {
    (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      );
      if (data?.success) {
        setReviews(data?.data);
      }
    })();
  }, []);

  return (
    <div className="text-white overflow-hidden">
      <div className="h-[190px] flex max-w-maxContentTab lg:max-w-maxContent my-[50px]">
        <Swiper
          slidesPerView={reviews.length < 4 ? reviews.length : 4} // Adjust for fewer slides
          spaceBetween={25}
          loop={reviews.length > 4} // Enable loop only if more than 4 slides
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className=""
        >
          {reviews.map((review, i) => (
            <SwiperSlide style={{marginLeft:5, marginRight:20}}  key={i}>
              <div >
                <div>
                  <img
                    src={
                      review?.user?.image
                        ? review?.user?.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                    }
                    alt=""
                    className="h-9 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="font-semibold text-richblack-5">
                      {`${review?.user?.firstName} ${review?.user?.lastName}`}
                    </h1>
                    <h2 className="text-[12px] font-medium text-richblue-500">
                      {review?.course?.courseName}
                    </h2>
                  </div>
                </div>
                <p>
                  {review?.review.split(" ").length > truncateWords
                    ? `${review?.review
                        .split(" ")
                        .slice(0, truncateWords)
                        .join(" ")}...`
                    : `${review.review}`}
                </p>
                <div>
                  <h3>{review.rating.toFixed(1)}</h3>

                  <RatingStars Review_Count={review.rating} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
