import restaurant from "../../../assets/cardbox/restaurant.jpg";
import spa from "../../../assets/cardbox/spa.jpg";
import fitness from "../../../assets/cardbox/jim.jpg";
import pool from "../../../assets/cardbox/pool.jpg";

const CardBox = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* card box row -1 */}
      <div className="flex w-fit">
        {/* image */}
        <div
          className="max-w-[570px] max-h-[380px] overflow-hidden"
          data-aos="fade-right"
          
        >
          <img
            className="w-full h-full hover:scale-110 duration-300 ease-linear "
            src={restaurant}
            alt=""
          />
        </div>
        {/* information */}
        <div
          className="bg-[#f8f5f0] px-8 py-24 text-left max-h-[380px] max-w-[570px]"
          data-aos="fade-left"
          
        >
          <p className="text-[15px] tracking-[3px] uppercase text-[#666] mb-1">
            Discover
          </p>
          <h2 className="text-[32px] text-[#222] font-[400] font-gilda mb-1">
            The Restaurant
          </h2>
          <p className="text-[15px] leading-7 text-[#666] mb-1">
            Restaurant inilla duiman at elit finibus viverra nec a lacus themo
            the nesudea seneoice misuscipit non sagie the fermen ziverra
            tristiue duru the ivite dianne onen nivami acsestion augue artine.
          </p>
          {/* button */}
          <div className="text-left pb-20 mt-5">
            <button className="relative px-6 py-2 font-[400] tracking-widest bg-[#ab8a62] text-white border border-white group overflow-hidden">
              <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-black group-hover:w-full group-hover:right-0 group-hover:left-auto"></span>
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                LEARN MORE
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* card box flex reverse 1*/}
      <div className="flex flex-row-reverse w-fit">
        {/* image */}
        <div className="max-w-[570px] max-h-[380px] overflow-hidden" data-aos="fade-left">
          <img
            className="w-full h-full hover:scale-110 duration-300 ease-linear"
            src={spa}
            alt=""
          />
        </div>
        {/* information */}
        <div className="bg-[#f8f5f0] px-8 py-24 text-left max-h-[380px] max-w-[570px]" data-aos="fade-right">
          <p className="text-[15px] tracking-[3px] uppercase text-[#666] mb-1">
            Experiences
          </p>
          <h2 className="text-[32px] text-[#222] font-[400] font-gilda mb-1">
            Spa Center
          </h2>
          <p className="text-[15px] leading-7 text-[#666] mb-1">
            Spa center inilla duiman at elit finibus viverra nec a lacus themo
            the nesudea seneoice misuscipit non sagie the fermen ziverra
            tristiue duru the ivite dianne onen nivami acsestion augue artine.
          </p>
          {/* button */}
          <div className="text-left pb-20 mt-5">
            <button className="relative px-6 py-2 font-[400] tracking-widest bg-[#ab8a62] text-white border border-white group overflow-hidden">
              <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-black group-hover:w-full group-hover:right-0 group-hover:left-auto"></span>
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                LEARN MORE
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* card box row -2 */}
      <div className="flex w-fit">
        {/* image */}
        <div className="max-w-[570px] max-h-[380px] overflow-hidden" data-aos="fade-right">
          <img
            className="w-full h-full hover:scale-110 duration-300 ease-linear "
            src={fitness}
            alt=""
          />
        </div>
        {/* information */}
        <div className="bg-[#f8f5f0] px-8 py-24 text-left max-h-[380px] max-w-[570px]" data-aos="fade-left">
          <p className="text-[15px] tracking-[3px] uppercase text-[#666] mb-1">
            Modern
          </p>
          <h2 className="text-[32px] text-[#222] font-[400] font-gilda mb-1">
            Fitness Center
          </h2>
          <p className="text-[15px] leading-7 text-[#666] mb-1">
            Restaurant inilla duiman at elit finibus viverra nec a lacus themo
            the nesudea seneoice misuscipit non sagie the fermen ziverra
            tristiue duru the ivite dianne onen nivami acsestion augue artine.
          </p>
          {/* button */}
          <div className="text-left pb-20 mt-5">
            <button className="relative px-6 py-2 font-[400] tracking-widest bg-[#ab8a62] text-white border border-white group overflow-hidden">
              <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-black group-hover:w-full group-hover:right-0 group-hover:left-auto"></span>
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                LEARN MORE
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* card box flex reverse 2*/}
      <div className="flex flex-row-reverse w-fit">
        {/* image */}
        <div className="max-w-[570px] max-h-[380px] overflow-hidden" data-aos="fade-left">
          <img
            className="w-full h-full hover:scale-110 duration-300 ease-linear"
            src={pool}
            alt=""
          />
        </div>
        {/* information */}
        <div className="bg-[#f8f5f0] px-8 py-24 text-left max-h-[380px] max-w-[570px]" data-aos="fade-right">
          <p className="text-[15px] tracking-[3px] uppercase text-[#666] mb-1">
            Experiences
          </p>
          <h2 className="text-[32px] text-[#222] font-[400] font-gilda mb-1">
            The Health Club & Pool
          </h2>
          <p className="text-[15px] leading-7 text-[#666] mb-1">
            The health club & pool at elit finibus viverra nec a lacus themo the
            nesudea seneoice misuscipit non sagie the fermen ziverra tristiue
            duru the ivite dianne onen nivami acsestion augue artine.
          </p>
          {/* button */}
          <div className="text-left pb-20 mt-5">
            <button className="relative px-6 py-2 font-[400] tracking-widest bg-[#ab8a62] text-white border border-white group overflow-hidden">
              <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-black group-hover:w-full group-hover:right-0 group-hover:left-auto"></span>
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                LEARN MORE
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
