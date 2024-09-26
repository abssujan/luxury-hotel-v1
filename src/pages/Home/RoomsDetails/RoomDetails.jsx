import { FaRegStar } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import roomBed from "../../../assets/roomDetails/roomBed.jpg";
import restaurant from "../../../assets/roomDetails/restaurant.jpg";
const RoomDetails = () => {
  return (
    <div>
      <div className=" max-w-[1200px] mx-auto">
        {/* container */}
        <div
          className="flex items-start space-x-10"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* left side details */}
          <div className=" w-[50%]">
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
            <h1 className="w-[70%] text-[#222] font-gilda text-[45px] uppercase font-[400] ">
              Enjoy a Luxury Experience
            </h1>
            {/* middle paragraph */}
            <div>
              <p className="text-[15px] mb-5 font-[400] text-[#666] leading-[1.75rem]">
                Welcome to the best five-star deluxe hotel in New York. Hotel
                elementum sesue the aucan vestibulum aliquam justo in sapien
                rutrum volutpat. Donec in quis the pellentesque velit. Donec id
                velit ac arcu posuere blane.
              </p>
              <p className="text-[15px] mb-5 font-[400] text-[#666] leading-[1.75rem]">
                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
                the aucan ligula. Orci varius natoque penatibus et magnis dis
                parturient monte nascete ridiculus mus nellentesque habitant
                morbine.
              </p>
            </div>
            {/* reservation */}
            <div className="flex items-center space-x-2">
              {/* icon */}
              <div>
                <MdOutlinePhoneInTalk className="text-[35px] text-[#8e6d45]"></MdOutlinePhoneInTalk>
              </div>
              <div>
                <p className="text-[15px]  font-[400] text-[#666] leading-[1.75rem]">
                  Reservation
                </p>
                <p className="text-[24px] text-[#8e6d45] font-barlow tracking-wide">
                  855 100 4444
                </p>
              </div>
            </div>
          </div>
          {/* right side images */}
          <div
            className="w-[50%]"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            {/* image box */}
            <div className="flex h-full space-x-10">
              {/* image-1 */}
              <div className="flex flex-col h-full items-end justify-end">
                <img
                  className=" mt-16 items-end"
                  src={restaurant}
                  alt="restaurant"
                />
              </div>
              {/* image-2 */}
              <div>
                <img src={roomBed} alt="room-bed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
