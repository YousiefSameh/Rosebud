import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='py-5 bg-white shadow-md'>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <img src="Images/img03.png" className="w-24 md:w-28" alt="Logo" />
        
        {/* Hamburger and Cart Icons for Mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          <div className='relative'>
            <a href="#"><i className="fa-solid fa-cart-shopping fa-lg"></i></a>
            <span className='absolute w-5 h-5 flex items-center justify-center rounded-full bg-black text-white -top-2 -right-2 text-xs'>1</span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <i className={`fa-solid fa-${isOpen ? 'times' : 'bars'} fa-lg`}></i>
          </button>
        </div>

        {/* Main Menu */}
        <ul className={`lg:flex items-center gap-8 ${isOpen ? 'block' : 'hidden'} lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:pl-0 pl-8 pr-4 py-4 lg:py-0 transition-all duration-300 ease-in-out shadow-lg lg:shadow-none`}>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full mb-4 lg:mb-0">
            <a href="#" className='uppercase block lg:inline text-lg'>Home</a>
          </li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full mb-4 lg:mb-0">
            <a href="#" className='uppercase block lg:inline text-lg'>Pages</a>
          </li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full mb-4 lg:mb-0">
            <a href="#" className='uppercase block lg:inline text-lg'>Portfolio</a>
          </li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full mb-4 lg:mb-0">
            <a href="#" className='uppercase block lg:inline text-lg'>Blog</a>
          </li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full mb-4 lg:mb-0">
            <a href="#" className='uppercase block lg:inline text-lg'>Shop</a>
          </li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full mb-4 lg:mb-0">
            <a href="#" className='uppercase block lg:inline text-lg'>Elements</a>
          </li>

          {/* Cart Icon for Larger Screens */}
          <ul className='hidden lg:flex gap-4 items-center lg:ml-6'>
            <li className='relative'>
              <a href="#"><i className="fa-solid fa-cart-shopping fa-lg"></i></a>
              <span className='absolute w-5 h-5 flex items-center justify-center rounded-full bg-black text-white -top-3 -right-2 text-xs'>1</span>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
