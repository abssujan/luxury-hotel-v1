import {
  FaCarSide,
  FaParking,
  FaSwimmingPool,
  FaWifi,
  FaCoffee,
  FaConciergeBell,
} from "react-icons/fa";

const HotelFacilities = () => {
  const services = [
    {
      title: "Pick Up & Drop",
      body: "We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
      icon: <FaCarSide />,
    },
    {
      title: "Parking Space",
      body: "Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.",
      icon: <FaParking />,
    },
    {
      title: "Swimming Pool",
      body: "Enjoy our refreshing pool to relax during your stay, mus nellentesque habitant.",
      icon: <FaSwimmingPool />,
    },
    {
      title: "Fibre Internet",
      body: "Stay connected with high-speed fibre internet, mus nellentesque habitant.",
      icon: <FaWifi />,
    },
    {
      title: "Breakfast",
      body: "Start your day with a delicious breakfast served fresh, mus nellentesque habitant.",
      icon: <FaCoffee />,
    },
    {
      title: "Room Service",
      body: "Order food and services directly to your room, mus nellentesque habitant.",
      icon: <FaConciergeBell />,
    },
  ];

  return (
    <div
      className="max-w-[1200px] mx-auto"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div>
        <p className="text-[15px] text-[#666] uppercase tracking-[6px]">
          Our Services
        </p>
        <h2 className="text-[45px] font-gilda text-[#222] mt-1">
          Hotel Facilities
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-4">
        {services.map((service, index) => (
          <div key={index} className="p-5 border border-[#f8e6cd]">
            {/* icons */}
            <div className="text-[45px] text-[#aa8453] mb-5">
              {service.icon}
            </div>

            <h3 className="text-[#222] text-[24px] text-[400] font-gilda mb-2">
              {service.title}
            </h3>
            <p className="text-[15px] text[#666] font-[400] leading-7">
              {service.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelFacilities;
