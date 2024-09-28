import { CiPlay1 } from "react-icons/ci";
import heroImage from "../../../assets/background/background-1.jpg";
import { FaRegStar } from "react-icons/fa6";
const FixedHeroImage = () => {
  return (
    <div>
      <div
        className="bg-fixed bg-cover bg-no-repeat h-[450px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className=" bg-black bg-opacity-30 bg-fixed bg-cover bg-no-repeat h-[450px]">
          <div className="flex flex-col items-center justify-center h-full">
            {/* icons */}
            <div className="text-[#e4a853] flex space-x-1 text-[15px] text-center justify-center w-full">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            {/* hotel tag */}
            <div className="mt-2">
              <p className="text-[15px] font-[400] text-white uppercase  tracking-[6px]">
              The Cappa Luxury Hotel
              </p>
            </div>
            {/* heading tag */}
            <div className="mt-1">
                <h1 className="text-[45px] text-[#fff] font-gilda font-[400]">Promotional Video</h1>
            </div>
            {/* promotional button */}
            <div className="mt-1">
                {/* first border */}
                <div className="cursor-pointer">
                    <div className="border border-[#808b96] rounded-full w-[100px] h-[100px] flex items-center justify-center">
                        <div className="border border-stone-100 rounded-full w-[90px] h-[90px] flex items-center justify-center">
                         <div className="text-[#e4a853] font-bold rounded-full hover:bg-transparent hover:text-white duration-500 ease-in text-[25px] bg-white w-full h-full flex items-center justify-center">
                            <CiPlay1></CiPlay1>
                         </div>
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

export default FixedHeroImage;
