import heroImage from "../../../assets/background/background-1.jpg";
import { FaRegStar } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const FooterCheckIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("1 Adult");
  const [selectedChildren, setSelectedChildren] = useState("0 Children");
  const [selectedRoom, setSelectedRoom] = useState("1 Room");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const adultsOptions = [
    { value: "1", label: "1 Adult" },
    { value: "2", label: "2 Adults" },
    { value: "3", label: "3 Adults" },
    { value: "4", label: "4 Adults" },
    { value: "5", label: "5 Adults" },
    { value: "6", label: "6 Adults" },
  ];

  const childrenOptions = [
    { value: "0", label: "0 Children" },
    { value: "1", label: "1 Child" },
    { value: "2", label: "2 Children" },
    { value: "3", label: "3 Children" },
    { value: "4", label: "4 Children" },
  ];

  const roomOptions = [
    { value: "1", label: "1 Room" },
    { value: "2", label: "2 Rooms" },
    { value: "3", label: "3 Rooms" },
    { value: "4", label: "4 Rooms" },
  ];

  const toggleDropdown = (type) => {
    setIsOpen((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSelect = (type, option) => {
    if (type === "adults") setSelectedValue(option.label);
    if (type === "children") setSelectedChildren(option.label);
    if (type === "rooms") setSelectedRoom(option.label);
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className="bg-fixed bg-cover bg-no-repeat h-[550px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="h-full w-full bg-black bg-opacity-30">
          {/* container */}
          <div className="max-w-[1200px] mx-auto h-full relative">
            <div className="max-w-[800px] mx-auto flex h-full items-center">
              {/* icons */}
              <div>
                <div className="text-[#e4a853] flex space-x-1 text-[15px] text-start   w-full">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                {/* p */}
                <h2 className="max-w-[450px] leading-8 mt-5 text-[24px] text-[#fff] font-gilda font-[400]">
                  Each of our guest rooms feature a private bath, wi-fi, cable
                  television and include full breakfast.
                </h2>
                <div className="mt-4">
                  <p className="text-[15px] text-[#fff]">Reservation</p>
                  <h6 className="text-[24px] text-[#fff] tracking-[1px]">
                    855 100 4444
                  </h6>
                  <small className="text-[10px] text-[#fff]">
                    Call us, it`s toll-free.
                  </small>
                </div>
              </div>
              {/* check in input section */}
              <div className="">
                <div className="bg-[#f8f5f0] h-[515px] py-[60px] px-[40px] absolute right-16 w-[445px] -bottom-16">
                  <div>
                    <h6 className="text-[15px] font-[400] uppercase tracking-[6px] mb-3">
                      Rooms & Suites
                    </h6>
                    <h4 className="text-[24px] font-[400] font-gilda text-[#222] border-b border-[#ececec] pb-4">
                      Hotel Booking Form
                    </h4>
                  </div>

                  {/* footer check in */}
                  <div className="mt-2">
                    <form className="flex flex-col  items-center justify-center">
                      {/* Check-in and check-out */}
                      <div className="flex flex-col w-full space-y-4">
                        {/* Check-in */}
                        <div className="relative bg-[#ffffff] w-full border-r-2 border-[#f1eeeb]">
                          <DatePicker
                            selected={checkInDate}
                            onChange={(date) => setCheckInDate(date)}
                            placeholderText="Check in"
                            className="block text-[#222] w-full bg-[#fff] border-none py-5 px-5 placeholder-[#222] text-[15px] focus:outline-none focus:border-transparent"
                          />
                          <FaCalendar className="absolute right-7 bottom-6 text-[#aa8453]" />
                        </div>
                        {/* Check-out */}
                        <div className="relative bg-[#ffffff] w-full border-r-2 border-[#f1eeeb]">
                          <DatePicker
                            selected={checkOutDate}
                            onChange={(date) => setCheckOutDate(date)}
                            placeholderText="Check out"
                            className="block text-[#222] w-full bg-[#fff] border-none py-5 px-5 placeholder-[#222] text-[15px] focus:outline-none focus:border-transparent"
                          />
                          <FaCalendar className="absolute right-7 bottom-6 text-[#aa8453]" />
                        </div>
                      </div>

                      {/* People, Children, and Rooms section */}
                      <div className="mt-10 lg:mt-0 flex flex-col w-full items-center">
                        <div className="flex mt-5 space-x-4 w-full">
                          {/* Adults dropdown */}
                          <div className="relative w-full">
                            <div
                              className=" text-[#222] w-full bg-[#fff] py-5 px-5 text-[15px] border-r-2 border-[#f1eeeb] cursor-pointer flex justify-between items-center"
                              onClick={() => toggleDropdown("adults")}
                            >
                              {selectedValue}
                              <span className="text-[#aa8453] md:ml-8">
                                &#x25BC;
                              </span>
                            </div>
                            {isOpen?.adults && (
                              <ul className="absolute bg-white border border-gray-300  w-full">
                                {adultsOptions.map((option) => (
                                  <li
                                    key={option.value}
                                    className="py-2 px-5 hover:bg-[#aa8453] cursor-pointer border-b border-gray-300 last:border-none"
                                    onClick={() =>
                                      handleSelect("adults", option)
                                    }
                                  >
                                    {option.label}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          {/* Children dropdown */}
                          <div className="relative w-full">
                            <div
                              className=" text-[#222] w-full bg-[#fff] py-5 px-5 text-[15px] border-r-2 border-[#f1eeeb] cursor-pointer flex justify-between items-center"
                              onClick={() => toggleDropdown("children")}
                            >
                              {selectedChildren}
                              <span className="text-[#aa8453] md:ml-8">
                                &#x25BC;
                              </span>
                            </div>
                            {isOpen?.children && (
                              <ul className="absolute bg-white border border-gray-300  w-full">
                                {childrenOptions.map((option) => (
                                  <li
                                    key={option.value}
                                    className="py-2 px-5 hover:bg-[#aa8453] cursor-pointer border-b border-gray-300 last:border-none"
                                    onClick={() =>
                                      handleSelect("children", option)
                                    }
                                  >
                                    {option.label}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>

                        {/* Check Now Button */}
                        <div className="w-full mt-5">
                          <button
                            type="submit"
                            className="w-full tracking-[3px] font-normal bg-[#aa8453] text-white py-5 px-12 text-[15px] uppercase ease-linear duration-300  cursor-pointer hover:bg-gray-900"
                          >
                            Check Availability
                          </button>
                        </div>
                      </div>
                    </form>
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

export default FooterCheckIn;
