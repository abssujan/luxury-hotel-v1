import bg1 from "../../assets/background/background-1.jpg";
import bg2 from "../../assets/background/background-2.jpg";
import bg3 from "../../assets/background/background-3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/effect-fade'; // Import fade effect styles

import "./Home.css";

// Import required modules
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

const Home = () => {
  return (
    <div>
      {/* swiper slider */}
      <Swiper
        pagination={{ clickable: true }} 
        navigation={true} // Enable navigation for next/prev buttons
        modules={[Pagination, Navigation, EffectFade]} // Include Pagination, Navigation, and EffectFade modules
        className="mySwiper"
        speed={1000} // Adjust the speed for smoother transition (1000ms = 1s)
        effect="fade" // Add fade effect for smooth transitions
      >
        <SwiperSlide><img src={bg1} alt="Background 1" /></SwiperSlide>
        <SwiperSlide><img src={bg2} alt="Background 2" /></SwiperSlide>
        <SwiperSlide><img src={bg3} alt="Background 3" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
