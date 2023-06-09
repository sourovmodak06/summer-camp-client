import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import axios from "./../../../hooks/useAxios";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const reviewData = async () => {
    const res = await axios.get("/review");
    setReviews(res.data);
  };
  useEffect(() => {
    reviewData();
  }, []);
  return (
    <div className="bg-[#03203c1c] py-5 md:py-10 dark:bg-[#0D0D0D]">
      <h2 className="text-[#03203C] dark:text-white font-semibold text-3xl uppercase text-center">
        review
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center w-9/12 m-auto my-10">
              <h2 className="text-2xl font-semibold uppercase pb-5 dark:text-white">
                {review.title}
              </h2>
              <p className="dark:text-white">{review.details}</p>
              <p className="my-5 text-gray-500">{review.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
