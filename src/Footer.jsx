import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-neutral-900'>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-6 lg:p-12">
        <div className="col">
          <img src="Images/img25.png" alt="" />
          <p className='my-6 text-neutral-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo hic ex dignissimos fuga fugit praesentium? Facere animi sed quis.</p>
          <div className="social-icons flex items-center gap-4">
            <a href="#" className='text-neutral-400'><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='text-neutral-400'><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className='text-neutral-400'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className='text-neutral-400'><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className="col">
          <h4 className='font-serif uppercase text-xl mb-4 text-white'>Working Hours</h4>
          <ul className='space-y-2'>
            <li className='text-neutral-600 text-sm'>Monday: 10AM - 9PM</li>
            <li className='text-neutral-600 text-sm'>Tuesday: 10AM - 9PM</li>
            <li className='text-neutral-600 text-sm'>Wednesday: 10AM - 9PM</li>
            <li className='text-neutral-600 text-sm'>Thursday: 10AM - 9PM</li>
            <li className='text-neutral-600 text-sm'>Saturday: 10AM - 9PM</li>
            <li className='text-neutral-600 text-sm'>Friday: 10AM - 9PM</li>
            <li className='text-neutral-600 text-sm'>Sunday: Closed</li>
          </ul>
        </div>
        <div className="col">
          <h4 className='font-serif uppercase text-xl mb-4 text-white'>Where To Find Us</h4>
          <ul className='space-y-2'>
            <li className='text-neutral-600 text-sm'>Address 1: Juniper Vally 17, New York, USA</li>
            <li className='text-neutral-600 text-sm'>Address 2: 831 Elm St, New York, USA</li>
            <li className='text-neutral-600 text-sm'>Phone 1: +246/ 167 - 1468</li>
            <li className='text-neutral-600 text-sm'>Phone 2: +246/ 569 - 42696</li>
            <li className='text-neutral-600 text-sm'>Email: rosebud@qodeinteractive.com</li>
          </ul>
        </div>
        <div className="col">
          <h4 className='font-serif uppercase text-xl mb-4 text-white'>Follow Our Instagram</h4>
          <div className="images grid grid-cols-3 gap-2">
            <img src="Images/img26.jpg" className='w-full' alt="" />
            <img src="Images/img27.jpg" className='w-full' alt="" />
            <img src="Images/img28.jpg" className='w-full' alt="" />
            <img src="Images/img29.jpg" className='w-full' alt="" />
            <img src="Images/img30.jpg" className='w-full' alt="" />
            <img src="Images/img31.jpg" className='w-full' alt="" />
          </div>
        </div>
      </div>
      <div className="copyright bg-neutral-950">
        <p className='text-neutral-500 text-sm text-center py-4'>&copy; 2024 Qode Interactive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;