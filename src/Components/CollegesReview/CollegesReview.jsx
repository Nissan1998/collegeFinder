import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@smastrom/react-rating/style.css";

import "./review.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import useReviews from "../../Hooks/useReviews";
import { Rating } from "@smastrom/react-rating";

const CollegesReview = () => {
  const reviews = useReviews();
  console.log(reviews);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl underline mt-10">
        Student's Feedback
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews?.map((review, idx) => (
          <SwiperSlide className="bg-sky-500" key={idx}>
            <div>
              <div className="avatar flex justify-center mt-3">
                <div className="w-24  bg-gradient-to-r from-yellow-500 to-white p-2 rounded-full">
                  <img className="rounded-full" src={review.img} />
                </div>
              </div>
              <h2 className="text-center text-xl text-white font-bold">
                {review.name}
              </h2>
              <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                  isRequired
                />
              </div>
              <p className="text-center p-2 text-white font-semibold">
                {review.feedback}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CollegesReview;
