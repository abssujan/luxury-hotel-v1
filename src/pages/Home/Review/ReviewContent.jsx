import man from "../../../assets/review/man.jpg";
import quot from "../../../assets/review/quot.png";
import { FaRegStar } from "react-icons/fa6";
const ReviewContent = () => {
  return (
    <div className="mt-2">
      <p className=" text-[15px] font-[400] leading-7 text-[#fff]">
        Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve
        ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel
        inilla duiman at finibus viverra neca the sene on satien the miss drana
        inc fermen norttito sit space, mus nellentesque habitan.
      </p>
      {/* Reviews Author */}
      <div className="mt-3">
        {/* author information */}
        <div className="flex items-center justify-start space-x-4">
          {/* image */}
          <div className="w-[76px] h-[76px] rounded-full">
            <img className="w-full h-full rounded-full " src={man} alt="" />
          </div>
          {/* information */}
          <div className="">
            {/* icons */}
            <div className="text-[#e4a853] flex space-x-1 text-[11px] text-start  justify-center w-full">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            {/* Name */}
            <div className="mt-1">
              <h6 className="text-[15px] font-[400] text-[#fff] ">Nolan White</h6>
              <small className="text-[12px] text-[#fff]">Guest review</small>
            </div>
           
          </div>
        </div>
        {/* quot  */}
        <div></div>
      </div>
    </div>
  );
};

export default ReviewContent;
