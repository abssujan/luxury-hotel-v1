import heroImage from "../../../assets/background/background-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import ReviewContent from "./ReviewContent";
const Review = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-no-repeat h-[450px] mt-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-black bg-opacity-30">
        <div className=" max-w-[600px] mx-auto h-full py-20 ">
          {/* information tag */}
          <div className="">
            <p className="text-start text-[13px] font-[400] text-white uppercase  tracking-[6px]">
              Testimonials
            </p>
          </div>
          {/* heading tag */}
          <div className="mt-1">
            <h1 className="text-[32px] text-[#fff] font-gilda font-[400]">
              What Client`s Say?
            </h1>
          </div>
          {/* row */}
          <div className="w-16 border-t border-[#ffffff33]"></div>
          <div className=" h-[218px]">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper h-full"
            >
              <SwiperSlide>
                <ReviewContent></ReviewContent>
              </SwiperSlide>
              <SwiperSlide>
                <ReviewContent></ReviewContent>
              </SwiperSlide>
              <SwiperSlide>
                <ReviewContent></ReviewContent>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
