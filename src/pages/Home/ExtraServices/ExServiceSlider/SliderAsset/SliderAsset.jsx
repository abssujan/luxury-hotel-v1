import glass from "../../../../../assets/sliderAsset/glass.jpg";
import lady from "../../../../../assets/sliderAsset/lady.jpg";
const SliderAsset = () => {
  return (
    <div className="flex  space-x-10">
      <div className="">
        <div className="max-w-[720px] mx-auto">
          {/* Centering wrapper */}
          <div className="relative flex flex-col text-gray-700 bg-[#f8f5f0] shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative overflow-hidden text-gray-700  bg-clip-border  h-fit">
              <img src={glass} alt="card-image" className=" w-full h-full" />
            </div>
            <div className="p-10">
              {/* heading */}
              <div>
                <h4 className="font-gilda text-[24px] text-[#222]">
                  Drinks included
                </h4>
                <h5 className="font-gilda text-[40px] mb-10 text-[#aa8453]">
                  $30
                  <span className="font-barlow text-[15px] text-[#666]">
                    / daily
                  </span>
                </h5>
              </div>
              {/* Updated ul Section */}
              <ul className="mb-6 mt-4 flex flex-col  space-y-3">
                <li className="flex items-center font-[15px] text-[#666]">
                  <svg
                    className="w-5 h-5 text-[#aa8453] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Hotel ut nisan the duru
                </li>
                <li className="flex items-center font-[15px] text-[#666]">
                  <svg
                    className="w-5 h-5 text-[#aa8453] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Orci miss natoque vasa ince
                </li>

                <li className="flex items-center font-[15px] text-[#666]">
                  <svg
                    className="w-5 h-5 text-[#aa8453] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clean sorem ipsum morbin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* second box */}
      <div className="">
        <div className="max-w-[720px] mx-auto">
          {/* Centering wrapper */}
          <div className="relative flex flex-col text-gray-700 bg-[#f8f5f0] shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative overflow-hidden text-gray-700 bg-white bg-clip-border  h-fit">
              <img src={lady} alt="card-image" className=" w-full h-full" />
            </div>
            <div className="p-10">
              {/* heading */}
              <div>
                <h4 className="font-gilda text-[24px] text-[#222]">
                  Room cleaning
                </h4>
                <h5 className="font-gilda text-[40px] mb-10 text-[#aa8453]">
                  $50
                  <span className="font-barlow text-[15px] text-[#666]">
                    / month
                  </span>
                </h5>
              </div>
              {/* Updated ul Section */}
              <ul className="mb-6 mt-4 flex flex-col  space-y-3">
                <li className="flex items-center font-[15px] text-[#666]">
                  <svg
                    className="w-5 h-5 text-[#aa8453] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Hotel ut nisan the duru
                </li>
                <li className="flex items-center font-[15px] text-[#666]">
                  <svg
                    className="w-5 h-5 text-[#aa8453] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Orci miss natoque vasa ince
                </li>

                <li className="flex items-center font-[15px] text-[#666]">
                  <svg
                    className="w-5 h-5 text-[#aa8453] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clean sorem ipsum morbin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderAsset;
