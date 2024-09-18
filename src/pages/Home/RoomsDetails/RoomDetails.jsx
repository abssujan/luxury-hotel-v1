import { FaRegStar } from "react-icons/fa6";
const RoomDetails = () => {
  return (
    <div>
      <div className=" max-w-[1200px] mx-auto">
        {/* container */}
        <div>
          {/* left side details */}
          <div>
            {/* star */}
            <div className="text-[#e4a853] flex space-x-4 text-[15px] text-center justify-start w-full">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            {/* p tag */}
            <p className="text-[15px] font-[400] text-[#666] uppercase mb-5 tracking-[6px] mt-5">
              The Cappa Luxury Hotel
            </p>
            {/* heading tag */}
            <h1 className="w-[50rem] text-[#222] mb-10 font-gilda text-[45px] uppercase font-[400] ">
              Enjoy a Luxury Experience
            </h1>
          </div>
          {/* right side images */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
