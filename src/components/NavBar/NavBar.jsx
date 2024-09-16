import { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import { FaAlignRight, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { title: 'HOME', pathName: '/' },
        { title: 'ABOUT', pathName: '/about' },
        { title: 'ROOMS & SUITES', pathName: '/rooms' },
        { title: 'RESTAURANT', pathName: '/restaurant' },
        { title: 'SPA', pathName: '/spa' },
        { title: 'NEWS', pathName: '/news' },
        { title: 'CONTACT', pathName: '/contact' },
    ];

    const handleNav = () => {
        setNav(!nav); // Toggle navigation menu
    };

    return (
        <div className="bg-transparent  fixed w-full z-10">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Top section */}
                <div className='flex items-center justify-between py-8'>
                    {/* Logo */}
                    <div>
                        <img className='w-40 h-10' src={logo} alt="Logo" />
                    </div>
                    {/* Desktop navigation links */}
                    <div className='hidden md:flex space-x-6'>
                        {links.map((link, index) => (
                            <a key={index} href={link.pathName} className="text-base font-normal text-white hover:text-[#aa8453] tracking-[3px]">
                                {link.title}
                            </a>
                        ))}
                    </div>
                    {/* Mobile menu icon */}
                    <div className='md:hidden'>
                        <FaAlignRight onClick={handleNav} className='w-5 h-5 cursor-pointer text-[#aa8453]' />
                    </div>
                </div>

                {/* Mobile navigation menu */}
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black bg-opacity-70' : ''}>
                    <div className={nav ? 'fixed left-0 top-0 w-[250px] h-full bg-[#caa26d] p-6 ease-in-out duration-300' : 'fixed left-[-100%]'}>
                        <div className='flex items-center justify-between'>
                            <img src={logo} alt="Logo" className='w-40 h-10' />
                            <FaTimes onClick={handleNav} className='w-5 h-5 cursor-pointer text-white' />
                        </div>
                        <ul className='mt-10'>
                            {links.map((link, index) => (
                                <li key={index} className="mb-6">
                                    <a href={link.pathName} className="text-lg font-medium text-white hover:text-[#aa8453] tracking-widest" onClick={() => setNav(false)}>
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

export default NavBar;
