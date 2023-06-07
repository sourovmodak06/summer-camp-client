import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Carousel1 from "../../../assets/c1.jpg";
import Carousel2 from "../../../assets/c2.jpg";
import Carousel3 from "../../../assets/c3.jpg";
import Carousel4 from "../../../assets/c4.jpg";
import Carousel5 from "../../../assets/c5.jpg";

const Carousel = () => {
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <>
      <Swiper
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        className="mySwiper h-[50vh] md:h-[80vh]"
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <div className="flex justify-between">
            <div className="md:w-1/2 p-5 md:p-10 h-[50vh] md:h-[80vh] flex flex-col justify-center">
              <h2 className="text-2xl font-medium">THE MOST REVOLUTIONARY</h2>
              <h2 className="text-6xl md:text-8xl font-bold w-56">
                MUSIC EDUCATION SCHOOL
              </h2>
              <p className="text-2xl font-medium">IN THE WORLD</p>
            </div>
            <img src={Carousel1} alt="" className="w-1/2 h-[80vh] hidden md:block" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-between">
          <img src={Carousel2} alt="" className="w-full md:w-1/2 h-[50vh] md:h-[80vh]" />
            <div className="w-1/2 p-10 hidden md:block">
              <h2 className="text-2xl font-medium">THE MOST REVOLUTIONARY</h2>
              <h2 className="text-8xl font-bold w-56">
                MUSIC EDUCATION SCHOOL
              </h2>
              <p className="text-2xl font-medium">IN THE WORLD</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-between">
            <div className="md:w-1/2 p-5 md:p-10 h-[50vh] md:h-[80vh] flex flex-col justify-center">
              <h2 className="text-2xl font-medium">THE MOST REVOLUTIONARY</h2>
              <h2 className="text-6xl md:text-8xl font-bold w-56">
                MUSIC EDUCATION SCHOOL
              </h2>
              <p className="text-2xl font-medium">IN THE WORLD</p>
            </div>
            <img src={Carousel3} alt="" className="w-1/2 h-[80vh] hidden md:block" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-between">
          <img src={Carousel4} alt="" className="w-full md:w-1/2 h-[50vh] md:h-[80vh]" />
            <div className="w-1/2 p-10 hidden md:block">
              <h2 className="text-2xl font-medium">THE MOST REVOLUTIONARY</h2>
              <h2 className="text-8xl font-bold w-56">
                MUSIC EDUCATION SCHOOL
              </h2>
              <p className="text-2xl font-medium">IN THE WORLD</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-between">
            <div className="md:w-1/2 p-5 md:p-10 h-[50vh] md:h-[80vh] flex flex-col justify-center">
              <h2 className="text-2xl font-medium">THE MOST REVOLUTIONARY</h2>
              <h2 className="text-6xl md:text-8xl font-bold w-56">
                MUSIC EDUCATION SCHOOL
              </h2>
              <p className="text-2xl font-medium">IN THE WORLD</p>
            </div>
            <img src={Carousel5} alt="" className="w-1/2 h-[80vh] hidden md:block" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
