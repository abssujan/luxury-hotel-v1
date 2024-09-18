import { FaRegStar } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TitleTwo = () => {
    useEffect(() => {
        AOS.init({ 
          duration: 2000, // Set default duration for animations
          easing: "ease-out-cubic", // Set default easing
          once: true, // Whether animation should happen only once
        });
      }, []); // Ensure AOS is initialized once
    
    return (
        <div>
        <div data-aos="fade-up">
          {/* star */}
          <div className="text-[#e4a853] flex space-x-4 text-[15px] text-center justify-center w-full">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          {/* heading */}
          <div className="mt-10 text-center">
            <p className="text-[15px] font-[400] text-white uppercase mb-5 tracking-[6px]">
              Luxury Hotel & Best Resort
            </p>
            <h1 className="w-[50rem] text-white mb-10 font-gilda text-[55px] uppercase font-[400] tracking-[15px]">
            The Perfect Base For You
            </h1>
          </div>
          {/* button */}
          <div className="text-center pb-20">
            <button className="relative px-6 py-2 font-[400] tracking-widest text-white border border-white group overflow-hidden">
              <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-white group-hover:w-full group-hover:right-0 group-hover:left-auto"></span>
              <span className="relative z-10 transition-all duration-300 group-hover:text-black">
                Rooms & Suites
              </span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default TitleTwo;