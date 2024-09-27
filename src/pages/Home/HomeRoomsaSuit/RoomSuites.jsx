import juinorSuit from "../../../assets/roomsSuits/junior suite.jpg";
import familyRoom from "../../../assets/roomsSuits/family room.jpg";
import doubleRoom from "../../../assets/roomsSuits/double room.jpg";
import deluxeRoom from "../../../assets/roomsSuits/deluxe room.jpg";
import superiorRoom from "../../../assets/roomsSuits/Superior room.jpg";
import { LiaBedSolid } from "react-icons/lia";
import { LuBath } from "react-icons/lu";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { PiTowelThin } from "react-icons/pi";
import { FaLongArrowAltRight } from "react-icons/fa";

const RoomSuites = () => {
  return (
    <div className="bg-[#f8f5f0] w-full">
      {/* container */}
      <div className="max-w-[1200px] mx-auto">
        {/* heading tag */}
        <div className="pt-20">
          <p className="text-[15px] font-[400] text-[#666] uppercase tracking-[6px] mt-5">
            The Cappa Luxury Hotel
          </p>
          <h1 className="text-[45px] font-gilda text-[#222] mb-5">
            Rooms & Suites
          </h1>
        </div>

        {/* rooms details */}
        <div className="">
          {/* three grid images box */}
          <div className="grid grid-cols-3 gap-10">
            {/* Junior Suite */}
            <div className="relative group overflow-hidden bg-black bg-opacity-70">
              {/* image */}
              <div>
                <img className=" group-hover:scale-125 duration-500 ease-linear"  src={juinorSuit} alt="" />
              </div>
              {/* booking button */}
              <div>
                <button
                  className=" absolute top-[20px] right-5 tracking-[3px] bg-transparent border border-[#FFFFFF80] text-[#FAFAFA] font-[400] py-3 px-1  uppercase text-[15px]   flex items-center justify-center"
                  style={{
                    writingMode: "vertical-lr",
                    transform: 'rotate(180deg)',
                    textOrientation: 'mixed'
                  }}
                >
                  Booking
                </button>
              </div>
              {/* room information and price */}
              <div className=" absolute p-5 left-0 w-full -bottom-10 group-hover:bottom-0  group-hover:bg-black group-hover:bg-opacity-45 duration-500 ease-linear">
                {/* room price and name */}
                <div>
                  {/* price */}
                  <h6>
                    <a className="text-[#fff] text-[15px] inline tracking-[3px] uppercase" href="#">150$ / Night </a>
                  </h6>
                  {/* name */}
                  <h5>
                    <a className="text-[#fff] text-[27px]  my-1  font-gilda" href="#">Junior Suite </a>
                  </h5>
                  <div className=" bg-[#fff] h-[1px] w-24 group-hover:w-full duration-500 ease-linear"></div>
                </div>
                {/* icon and details */}
                <div className="flex justify-between items-center mt-5 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100  duration-1000 ease-linear h-full">
                  {/* icons */}
                  <div>
                    <ul className="flex items-center space-x-3">
                      <li className="text-[18px] text-[#fff]"><LiaBedSolid></LiaBedSolid></li>
                      <li className="text-[18px] text-[#fff]"><LuBath></LuBath></li>
                      <li className="text-[18px] text-[#fff]"><MdOutlineFreeBreakfast></MdOutlineFreeBreakfast></li>
                      <li className="text-[18px] text-[#fff]"><PiTowelThin></PiTowelThin></li>
                    </ul>
                  </div>
                  {/* details button */}
                  <div>
                    <a className="flex  items-center uppercase font-[15px] tracking-[3px] text-[#fff] hover:text-[#aa8453]" href="#">Details <span className="font-[10px] ml-2 text-right hover:text-[#aa8453] text-[#fff]"><FaLongArrowAltRight></FaLongArrowAltRight></span></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Family Room */}
            <div className="relative group overflow-hidden bg-black bg-opacity-70">
              <div>
                <img className="group-hover:scale-125 duration-500 ease-linear" src={familyRoom} alt="" />
              </div>
              <div className="absolute top-[20px] right-5 tracking-[3px] bg-transparent border border-[#FFFFFF80] text-[#FAFAFA] font-[400] py-3 px-1 uppercase text-[15px] flex items-center justify-center"
                style={{ writingMode: "vertical-lr", transform: 'rotate(180deg)', textOrientation: 'mixed' }}>
                Booking
              </div>
              <div className="absolute p-5 left-0 w-full -bottom-10 group-hover:bottom-0 group-hover:bg-black group-hover:bg-opacity-45 duration-500 ease-linear">
                <h6>
                  <a className="text-[#fff] text-[15px] inline tracking-[3px] uppercase" href="#">180$ / Night </a>
                </h6>
                <h5>
                  <a className="text-[#fff] text-[27px] my-1 font-gilda" href="#">Family Room </a>
                </h5>
                <div className="bg-[#fff] h-[1px] w-24 group-hover:w-full duration-500 ease-linear"></div>
                <div className="flex justify-between items-center mt-5 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-1000 ease-linear h-full">
                  <ul className="flex items-center space-x-3">
                    <li className="text-[18px] text-[#fff]"><LiaBedSolid></LiaBedSolid></li>
                    <li className="text-[18px] text-[#fff]"><LuBath></LuBath></li>
                    <li className="text-[18px] text-[#fff]"><MdOutlineFreeBreakfast></MdOutlineFreeBreakfast></li>
                    <li className="text-[18px] text-[#fff]"><PiTowelThin></PiTowelThin></li>
                  </ul>
                  <div>
                    <a className="flex items-center uppercase font-[15px] tracking-[3px] text-[#fff] hover:text-[#aa8453]" href="#">Details <span className="font-[10px] ml-2 text-right hover:text-[#aa8453] text-[#fff]"><FaLongArrowAltRight></FaLongArrowAltRight></span></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Double Room */}
            <div className="relative group overflow-hidden bg-black bg-opacity-70">
              <div>
                <img className="group-hover:scale-125 duration-500 ease-linear" src={doubleRoom} alt="" />
              </div>
              <div className="absolute top-[20px] right-5 tracking-[3px] bg-transparent border border-[#FFFFFF80] text-[#FAFAFA] font-[400] py-3 px-1 uppercase text-[15px] flex items-center justify-center"
                style={{ writingMode: "vertical-lr", transform: 'rotate(180deg)', textOrientation: 'mixed' }}>
                Booking
              </div>
              <div className="absolute p-5 left-0 w-full -bottom-10 group-hover:bottom-0 group-hover:bg-black group-hover:bg-opacity-45 duration-500 ease-linear">
                <h6>
                  <a className="text-[#fff] text-[15px] inline tracking-[3px] uppercase" href="#">140$ / Night </a>
                </h6>
                <h5>
                  <a className="text-[#fff] text-[27px] my-1 font-gilda" href="#">Double Room </a>
                </h5>
                <div className="bg-[#fff] h-[1px] w-24 group-hover:w-full duration-500 ease-linear"></div>
                <div className="flex justify-between items-center mt-5 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-1000 ease-linear h-full">
                  <ul className="flex items-center space-x-3">
                    <li className="text-[18px] text-[#fff]"><LiaBedSolid></LiaBedSolid></li>
                    <li className="text-[18px] text-[#fff]"><LuBath></LuBath></li>
                    <li className="text-[18px] text-[#fff]"><MdOutlineFreeBreakfast></MdOutlineFreeBreakfast></li>
                    <li className="text-[18px] text-[#fff]"><PiTowelThin></PiTowelThin></li>
                  </ul>
                  <div>
                    <a className="flex items-center uppercase font-[15px] tracking-[3px] text-[#fff] hover:text-[#aa8453]" href="#">Details <span className="font-[10px] ml-2 text-right hover:text-[#aa8453] text-[#fff]"><FaLongArrowAltRight></FaLongArrowAltRight></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* two flex box images */}
          <div className="flex gap-10 mt-10">
            {/* Deluxe Room */}
            <div className="relative group overflow-hidden bg-black bg-opacity-70 w-1/2">
              <img className="group-hover:scale-125 duration-500 ease-linear object-cover h-full w-full" src={deluxeRoom} alt="" />
              <div className="absolute top-[20px] right-5 tracking-[3px] bg-transparent border border-[#FFFFFF80] text-[#FAFAFA] font-[400] py-3 px-1 uppercase text-[15px] flex items-center justify-center"
                style={{ writingMode: "vertical-lr", transform: 'rotate(180deg)', textOrientation: 'mixed' }}>
                Booking
              </div>
              <div className="absolute p-5 left-0 w-full -bottom-10 group-hover:bottom-0 group-hover:bg-black group-hover:bg-opacity-45 duration-500 ease-linear">
                <h6>
                  <a className="text-[#fff] text-[15px] inline tracking-[3px] uppercase" href="#">200$ / Night </a>
                </h6>
                <h5>
                  <a className="text-[#fff] text-[27px] my-1 font-gilda" href="#">Deluxe Room </a>
                </h5>
                <div className="bg-[#fff] h-[1px] w-24 group-hover:w-full duration-500 ease-linear"></div>
                <div className="flex justify-between items-center mt-5 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-1000 ease-linear h-full">
                  <ul className="flex items-center space-x-3">
                    <li className="text-[18px] text-[#fff]"><LiaBedSolid></LiaBedSolid></li>
                    <li className="text-[18px] text-[#fff]"><LuBath></LuBath></li>
                    <li className="text-[18px] text-[#fff]"><MdOutlineFreeBreakfast></MdOutlineFreeBreakfast></li>
                    <li className="text-[18px] text-[#fff]"><PiTowelThin></PiTowelThin></li>
                  </ul>
                  <div>
                    <a className="flex items-center uppercase font-[15px] tracking-[3px] text-[#fff] hover:text-[#aa8453]" href="#">Details <span className="font-[10px] ml-2 text-right hover:text-[#aa8453] text-[#fff]"><FaLongArrowAltRight></FaLongArrowAltRight></span></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Superior Room */}
            <div className="relative group overflow-hidden bg-black bg-opacity-70 w-1/2">
              <img className="group-hover:scale-125 duration-500 ease-linear object-cover h-full w-full" src={superiorRoom} alt="" />
              <div className="absolute top-[20px] right-5 tracking-[3px] bg-transparent border border-[#FFFFFF80] text-[#FAFAFA] font-[400] py-3 px-1 uppercase text-[15px] flex items-center justify-center"
                style={{ writingMode: "vertical-lr", transform: 'rotate(180deg)', textOrientation: 'mixed' }}>
                Booking
              </div>
              <div className="absolute p-5 left-0 w-full -bottom-10 group-hover:bottom-0 group-hover:bg-black group-hover:bg-opacity-45 duration-500 ease-linear">
                <h6>
                  <a className="text-[#fff] text-[15px] inline tracking-[3px] uppercase" href="#">190$ / Night </a>
                </h6>
                <h5>
                  <a className="text-[#fff] text-[27px] my-1 font-gilda" href="#">Superior Room </a>
                </h5>
                <div className="bg-[#fff] h-[1px] w-24 group-hover:w-full duration-500 ease-linear"></div>
                <div className="flex justify-between items-center mt-5 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-1000 ease-linear h-full">
                  <ul className="flex items-center space-x-3">
                    <li className="text-[18px] text-[#fff]"><LiaBedSolid></LiaBedSolid></li>
                    <li className="text-[18px] text-[#fff]"><LuBath></LuBath></li>
                    <li className="text-[18px] text-[#fff]"><MdOutlineFreeBreakfast></MdOutlineFreeBreakfast></li>
                    <li className="text-[18px] text-[#fff]"><PiTowelThin></PiTowelThin></li>
                  </ul>
                  <div>
                    <a className="flex items-center uppercase font-[15px] tracking-[3px] text-[#fff] hover:text-[#aa8453]" href="#">Details <span className="font-[10px] ml-2 text-right hover:text-[#aa8453] text-[#fff]"><FaLongArrowAltRight></FaLongArrowAltRight></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomSuites;
