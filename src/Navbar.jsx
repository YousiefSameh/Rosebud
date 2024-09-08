import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Disable background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <nav
      className={`py-5 fixed w-full z-40 transition-all duration-300 ${
        isScroll ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="navbar-container container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <img
          src={`${isScroll ? 'Images/img03.png' : 'Images/img04.png'}`}
          className="w-20 sm:w-24 md:w-28"
          alt="Logo"
        />

        {/* Mobile Toggle & Cart Icon */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Cart Icon with Item Count */}
          <div className="relative">
            <a href="#" aria-label="Cart">
              <i className={`fa-solid fa-cart-shopping fa-lg ${isScroll ? 'text-black' : 'text-white'}`}></i>
            </a>
            <span className="absolute w-5 h-5 flex items-center justify-center rounded-full bg-black text-white -top-2 -right-2 text-xs">
              1
            </span>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${isScroll ? 'text-black' : 'text-white'}`}
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid fa-${isOpen ? 'times' : 'bars'} fa-lg`}></i>
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex items-center gap-8 transition-all duration-300 ease-in-out transform ${
            isOpen ? 'block' : 'hidden'
          } lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:pl-0 pl-8 pr-4 py-4 lg:py-0 shadow-lg lg:shadow-none`}
          style={{ transition: 'transform 0.5s ease' }}
        >
          {/* Links */}
          {['Home', 'Pages', 'Portfolio', 'Blog', 'Shop', 'Elements'].map((link) => (
            <li
              key={link}
              className={`relative before:transition-all before:left-1/2 before:-translate-x-1/2 before:absolute before:w-0 before:h-0.5 
              lg:before:bg-white before:bg-black before:bottom-0 hover:before:w-full mb-4 lg:mb-0`}
            >
              <a
                href="#"
                className={`uppercase block lg:inline text-lg ${isOpen ? "text-black" : isScroll ? "text-black" : "text-white"} ${
                  window.location.pathname.includes(link.toLowerCase()) ? 'font-bold' : ''
                }`}
              >
                {link}
              </a>
            </li>
          ))}

          {/* Cart Icon in Navbar on Larger Screens */}
          <ul className="hidden lg:flex gap-4 items-center lg:ml-6">
            <li className="relative">
              <a href="#" aria-label="Cart">
                <i className={`fa-solid fa-cart-shopping fa-lg ${isScroll ? 'text-black' : 'text-white'}`}></i>
              </a>
              <span className="absolute w-5 h-5 flex items-center justify-center rounded-full bg-black text-white -top-3 -right-2 text-xs leading-normal">
                1
              </span>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
