import { MdOutlinePhoneInTalk } from "react-icons/md";
const ExtraServices = () => {
  return (
    <div className="bg-[#222222] mt-32 py-20">
      {/* container */}
      <div className="max-w-[1200px] mx-auto">
        <div className="">
          {/* text information */}
          <div>
            <p className=" text-[#aa8453] uppercase text-[15px] font-[400] tracking-[6px]">
              Best Prices
            </p>
            <h1 className="text-[45px] font-gilda text-[#fff]">
              Extra Services
            </h1>
            {/* middle paragraph */}
            <div>
              <p className="text-[#adadad] text-[15px] mb-5">
                The best prices for your relaxing vacation. The utanislen quam
                nestibulum ac quame odion elementum sceisue the aucan.
              </p>
              <p className="text-[#adadad] text-[15px] mb-5">
                Orci varius natoque penatibus et magnis disney parturient monte
                nascete ridiculus mus nellen etesque habitant morbine.
              </p>
            </div>
            {/* information with icon */}
            <div className="flex items-center space-x-2">
              {/* icon */}
              <div>
                <MdOutlinePhoneInTalk className="text-[35px] text-[#8e6d45]"></MdOutlinePhoneInTalk>
              </div>
              <div>
                <p className="text-[15px]  font-[400] text-[#adadad] leading-[1.75rem]">
                For information
                </p>
                <p className="text-[24px] text-[#8e6d45] font-barlow tracking-wide">
                  855 100 4444
                </p>
              </div>
            </div>
          </div>
          {/* Swiper Slider section */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
