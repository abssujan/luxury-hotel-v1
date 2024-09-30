import { FaFacebook, FaInstagram, FaPhone, FaPinterest, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#222222] h-96">
      <div className="max-w-[1200px] mx-auto py-20">
        {/* content */}
        <div className="flex  justify-between">
          {/* about */}
          <div className="w-[30%]">
            <h3 className="text-2xl text-[#fff] font-gilda mb-5">
              About Hotel
            </h3>
            <p className="text-[15px] text-[#adadad] leading-7">
              Welcome to the best five-star deluxe hotel in New York. Hotel
              elementum sesue the aucan vestibulum aliquam justo in sapien
              rutrum volutpat.
            </p>
            <button className="h-[50px] mt-5 bg-[#282828] text-[#adadad] w-[160px]">
              English
            </button>
          </div>
          {/* explore */}
          <div className="w-[30%]">
            <h3 className="text-2xl text-[#fff] font-gilda mb-5">Explore</h3>
            <ul>
              <li className=" hover:translate-x-2 duration-500 ease-linear">
                <a
                  className="text-[15px] text-[#adadad] "
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className=" hover:translate-x-2 duration-500 ease-linear">
                <a
                  className="text-[15px] text-[#adadad] "
                  href="#"
                >
                  Roms & Suites
                </a>
              </li>
              <li className=" hover:translate-x-2 duration-500 ease-linear">
                <a
                  className="text-[15px] text-[#adadad] "
                  href="#"
                >
                  Restaurant
                </a>
              </li>
              <li className=" hover:translate-x-2 duration-500 ease-linear">
                <a
                  className="text-[15px] text-[#adadad] "
                  href="#"
                >
                  Spa & Wellness
                </a>
              </li>
              <li className=" hover:translate-x-2 duration-500 ease-linear">
                <a
                  className="text-[15px] text-[#adadad] "
                  href="#"
                >
                  About Hotel
                </a>
              </li>
              <li className=" hover:translate-x-2 duration-500 ease-linear">
                <a
                  className="text-[15px] text-[#adadad] "
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="w-[30%]">
            <h3 className="text-2xl text-[#fff] font-gilda mb-5">Contact</h3>
            {/* information */}
            <div>
              <p className="text-[15px] text-[#adadad] ">1616 Broadway NY, New York 10001
              United States of America</p>

              <div className="flex mt-5 items-center space-x-4">
              <FaPhone className="text-[24px] text-[#adadad]" />
              <h6 className="text-[24px] text-[#adadad]"> 855 100 4444</h6>
              </div>
              <div className="mt-4">
                <a href="#" className="text-[15px]  text-[#adadad] border-b border-[#aa8453]" >info@luxuryhotel.com</a>
              </div>
            </div>
            {/* social icons */}
            <div className="mt-4">
              <ul className="flex space-x-4 cursor-pointer text-[20px] text-[#fff]">
                <li>
                <FaInstagram />
                </li>
                <li>
                <FaSquareXTwitter />
                </li>
                <li>
                <FaYoutube />
                </li>
                <li>
                <FaFacebook />
                </li>
                <li>
                <FaPinterest />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
