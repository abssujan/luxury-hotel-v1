import { FaCalendar } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './HotelBooking.css'

const HotelBooking = () => {
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
      <form className="flex flex-col md:flex-row items-center justify-center">
        {/* Check-in and check-out */}
        <div className="flex">
          {/* Check-in */}
          <div className="relative w-full border-r-2 border-[#f1eeeb]">
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check in"
              className="block text-[#222] w-full bg-[#fff] border-none py-5 px-5 placeholder-[#222] text-[15px] focus:outline-none focus:border-transparent"
            />
            <FaCalendar className="absolute right-2 bottom-6 text-[#aa8453]" />
          </div>
          {/* Check-out */}
          <div className="relative w-full border-r-2 border-[#f1eeeb]">
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check out"
              className="block text-[#222] w-full bg-[#fff] border-none py-5 px-5 placeholder-[#222] text-[15px] focus:outline-none focus:border-transparent"
            />
            <FaCalendar className="absolute right-2 bottom-6 text-[#aa8453]" />
          </div>
        </div>

        {/* People, Children, and Rooms section */}
        <div className="mt-10 lg:mt-0 flex items-center">
          {/* Adults dropdown */}
          <div className="relative">
            <div
              className="block text-[#222] w-full bg-[#fff] py-5 px-5 text-[15px] border-r-2 border-[#f1eeeb] cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown("adults")}
            >
              {selectedValue}
              <span className="text-[#aa8453]">&#x25BC;</span>
            </div>
            {isOpen?.adults && (
              <ul className="absolute bg-white border border-gray-300 mt-1 w-full">
                {adultsOptions.map((option) => (
                  <li
                    key={option.value}
                    className="py-2 px-5 hover:bg-[#aa8453] cursor-pointer border-b border-gray-300 last:border-none"
                    onClick={() => handleSelect("adults", option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Children dropdown */}
          <div className="relative">
            <div
              className="block text-[#222] w-full bg-[#fff] py-5 px-5 text-[15px] border-r-2 border-[#f1eeeb] cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown("children")}
            >
              {selectedChildren}
              <span className="text-[#aa8453]">&#x25BC;</span>
            </div>
            {isOpen?.children && (
              <ul className="absolute bg-white border border-gray-300 mt-1 w-full">
                {childrenOptions.map((option) => (
                  <li
                    key={option.value}
                    className="py-2 px-5 hover:bg-[#aa8453] cursor-pointer border-b border-gray-300 last:border-none"
                    onClick={() => handleSelect("children", option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Hotel Room dropdown */}
          <div className="relative">
            <div
              className=" text-[#222] w-full bg-[#fff] py-5 px-5 text-[15px] border-r-2 border-[#f1eeeb] cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown("rooms")}
            >
              {selectedRoom}
              <span className="text-[#aa8453]">&#x25BC;</span>
            </div>
            {isOpen?.rooms && (
              <ul className="absolute bg-white border border-gray-300 mt-1 w-full">
                {roomOptions.map((option) => (
                  <li
                    key={option.value}
                    className="py-2 px-5 hover:bg-[#aa8453] cursor-pointer border-b border-gray-300 last:border-none"
                    onClick={() => handleSelect("rooms", option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
           {/* Check Now Button */}
          <div className="">
            <button
              type="submit"
              className="w-full tracking-[3px] font-normal bg-[#aa8453] text-white py-5 px-6 text-[15px] uppercase ease-linear duration-300  cursor-pointer hover:bg-gray-900"
            >
              Check Now
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default HotelBooking;
