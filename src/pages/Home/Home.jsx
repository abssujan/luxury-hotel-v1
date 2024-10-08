import bg1 from "../../assets/background/background-1.jpg";
import bg2 from "../../assets/background/background-2.jpg";
import bg3 from "../../assets/background/background-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import NavBar from "../../components/NavBar/NavBar";
import TitleOne from "./TitleComponent/TitleOne";
import TitleTwo from "./TitleComponent/TitleTwo";
import HotelBooking from "./HotelBooking/HotelBooking";
import RoomDetails from "./RoomsDetails/RoomDetails";
import NavBarWhite from "../../components/NavBar/NavBarWhite";
import RoomSuites from "./HomeRoomsaSuit/RoomSuites";
import ExtraServices from "./ExtraServices/ExtraServices";
import FixedHeroImage from "./FixedHeroImage/FixedHeroImage";
import HotelFacilities from "./HotelFacilites/HotelFacilities";
import Review from "./Review/Review";
import CardBox from "./CardBox/CardBox";
import FooterCheckIn from "./FooterCheckIn/FooterCheckIn";
import FooterBrand from "./FooterBrand/FooterBrand";
import Footer from "./Footer/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: duration of the animation
      once: true, // Optional: trigger animations only once
    });
  }, []);

  return (
    <div>
      <div className="relative"> {/* This is the container that defines boundaries */}
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
            <img className="relative" src={bg1} alt="Background 1" />
            <div className="absolute inset-0 flex items-center justify-center">
              <TitleOne />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="relative" src={bg2} alt="Background 2" />
            <div className="absolute inset-0 flex items-center justify-center">
              <TitleTwo />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="relative" src={bg3} alt="Background 3" />
            <div className="absolute inset-0 flex items-center justify-center">
              <TitleOne />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* navigation bar positioning inside the relative container */}
        <div className="z-40 absolute top-0 left-0 w-full">
          <NavBar />
          <NavBarWhite></NavBarWhite>
        </div>

        {/* check in and out bar positioned within the relative container */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-32 z-40 w-full">
          <HotelBooking />
        </div>
      </div>

      {/* rooms and details section */}
      <div className="mt-20">
        <RoomDetails />
      </div>
      {/* Rooms & Suites */}
      <div className="mt-20" >
        <RoomSuites></RoomSuites>
      </div>
      {/* Extra Services Section */}
      <div>
        <ExtraServices></ExtraServices>
      </div>
      {/* Fixed Hero Image */}
      <div>
        <FixedHeroImage></FixedHeroImage>
      </div>
      {/* Hotel Facilities */}
      <div className="mt-40">
        <HotelFacilities></HotelFacilities>
      </div>
      {/* Review section */}
      <div>
        <Review></Review>
      </div>
      {/* Hotel Facilities Card Box*/}
      <div className="mt-40">
        <CardBox></CardBox>
      </div>
      {/* footer check In */}
      <div className="">
        <FooterCheckIn></FooterCheckIn>
      </div>
      {/* Hotel Facilities Card Box*/}
      <div className="">
        <FooterBrand></FooterBrand>
      </div>
      {/* footer */}
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
