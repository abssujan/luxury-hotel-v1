import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"; // Import autoplay styles
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import SliderAsset from "./SliderAsset/SliderAsset";
import SliderAssetTwo from "./SliderAsset/SliderAssetTwo";

const ExServiceSlider = () => {
  return (
    <div>
      {/* swiper slider */}
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
            delay: 5000, // Delay between slides (5 seconds)
            disableOnInteraction: false, // Autoplay won't stop after user interaction
          }}
        onSlideChange={() => {
          AOS.refreshHard(); // Completely reset AOS animations on slide change
        }}
        modules={[Pagination, Navigation, EffectFade, Autoplay]} // Add Autoplay module
        className="mySwiper"
        speed={1000} // Speed for smooth transitions (1 second)
        effect="fade" // Apply fade effect between slides
      >
        <SwiperSlide>
          <div>
           <SliderAsset></SliderAsset>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <SliderAssetTwo></SliderAssetTwo>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ExServiceSlider;
