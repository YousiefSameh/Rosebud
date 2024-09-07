import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-5'>
      <div className="container mx-auto flex items-center justify-between">
        <img src="Images\img03.png" className="w-28" alt="" />
        <ul className='flex items-center gap-6'>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full"><a href="#" className='uppercase'>Home</a></li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full"><a href="#" className='uppercase'>Pages</a></li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full"><a href="#" className='uppercase'>Portfolio</a></li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full"><a href="#" className='uppercase'>Blog</a></li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full"><a href="#" className='uppercase'>Shop</a></li>
          <li className="before:transition-all before:left-1/2 before:-translate-x-1/2 relative before:absolute before:w-0 before:h-0.5 before:bg-black before:bottom-0 hover:before:w-full"><a href="#" className='uppercase'>Elements</a></li>
          <ul className='flex gap-4 items-center'>
            <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-bars"></i></a></li>
          </ul>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar