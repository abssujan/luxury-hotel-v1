import bg1 from "../../assets/background/background-1.jpg";
import bg2 from "../../assets/background/background-2.jpg";
import bg3 from "../../assets/background/background-3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'; // Import autoplay styles

import "./Home.css";

// Import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      {/* swiper slider */}
      <Swiper
        pagination={{ clickable: true }} 
       
        autoplay={{
            delay: 3000, // Delay between slides (3000ms = 3 seconds)
            disableOnInteraction: false, // Autoplay won't stop after user interaction
          }}
        modules={[Pagination, Navigation, EffectFade, Autoplay]} // Add Autoplay module
        className="mySwiper"
        speed={1000} // Speed for smooth transitions (1 second)
        effect="fade" // Apply fade effect between slides
      >
        <SwiperSlide><img src={bg1} alt="Background 1" />
        
        </SwiperSlide>
        <SwiperSlide><img src={bg2} alt="Background 2" /></SwiperSlide>
        <SwiperSlide><img src={bg3} alt="Background 3" /></SwiperSlide>
      </Swiper>
      <div className=" z-40 absolute top-0 left-0">
            <NavBar></NavBar>
        </div>
    </div>
  );
};

export default Home;
