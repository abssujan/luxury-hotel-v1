import { useState, useEffect } from "react";
import logo from "../../assets/logo/logo-dark.png";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBarWhite = () => {
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    { title: "HOME", pathName: "/" },
    { title: "ABOUT", pathName: "/about" },
    { title: "ROOMS & SUITES", pathName: "/rooms" },
    { title: "RESTAURANT", pathName: "/restaurant" },
    { title: "SPA", pathName: "/spa" },
    { title: "NEWS", pathName: "/news" },
    { title: "CONTACT", pathName: "/contact" },
  ];

  const handleNav = () => {
    setNav(!nav); // Toggle navigation menu
  };

  // Track scroll position and show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white fixed w-full z-10 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Top section */}
        <div className="flex items-center justify-between py-8">
          {/* Logo */}
          <div>
            <Link to="/">
              <img className="w-40 h-10" src={logo} alt="Logo" />
            </Link>
          </div>
          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.pathName}
                className="text-base font-normal text-black hover:text-[#aa8453] tracking-[3px]"
              >
                {link.title}
              </a>
            ))}
          </div>
          {/* Mobile menu icon */}
          <div className="md:hidden">
            <FaAlignRight
              onClick={handleNav}
              className="w-5 h-5 cursor-pointer text-black"
            />
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-full bg-black bg-opacity-70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[250px] h-full bg-white p-6 ease-in-out duration-300"
                : "fixed left-[-100%]"
            }
          >
            <div className="flex items-center justify-between">
              <Link to="/">
                <img className="w-40 h-10" src={logo} alt="Logo" />
              </Link>
              <FaTimes
                onClick={handleNav}
                className="w-5 h-5 cursor-pointer text-black"
              />
            </div>
            <ul className="mt-10">
              {links.map((link, index) => (
                <li key={index} className="mb-6">
                  <a
                    href={link.pathName}
                    className="text-lg font-medium text-black hover:text-[#aa8453] tracking-widest"
                    onClick={() => setNav(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarWhite;
