import juinorSuit from "../../../assets/roomsSuits/junior suite.jpg";
import familyRoom from "../../../assets/roomsSuits/family room.jpg";
import doubleRoom from "../../../assets/roomsSuits/double room.jpg";
import deluxeRoom from "../../../assets/roomsSuits/deluxe room.jpg";
import superiorRoom from "../../../assets/roomsSuits/Superior room.jpg";

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
        <div>
          {/* three grid images box */}
          <div className="grid grid-cols-3 gap-10">
            {/* Junior Suite */}
            <div className=" relative">
              {/* image */}
              <div>
                <img src={juinorSuit} alt="" />
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
            </div>
            {/* Family Room */}
            <div>
              <img src={familyRoom} alt="" />
            </div>
            {/* Double Room */}
            <div>
              <img src={doubleRoom} alt="" />
            </div>
          </div>
          {/* two flex box image */}
          <div className="flex gap-10 mt-10">
            {/* Deluxe Room */}
            <div className="w-1/2 max-h-80">
              <img
                className=" object-cover h-full w-full"
                src={deluxeRoom}
                alt=""
              />
            </div>
            {/* Superior Room */}
            <div className="w-1/2 max-h-80   mb-20">
              <img className="h-full w-full " src={superiorRoom} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSuites;
