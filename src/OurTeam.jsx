import React from 'react';

const OurTeam = () => {
  return (
    <section className='pb-10 lg:pb-24 relative'>
      <div className="heading flex items-center justify-center flex-col gap-6 text-center px-4">
        <h2 className="font-Handwrite text-2xl md:text-3xl">Wonderful Gifts</h2>
        <h1 className="font-serif text-3xl md:text-5xl uppercase">
          Our Team Work
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 relative z-20 px-4">
        <div className="col text-center">
          <img src="Images/img17.jpg" className='w-full' alt="" />
          <h2 className='font-serif text-xl uppercase mt-4'>Mason Robinson</h2>
          <p className='text-neutral-500 my-2'>Florist</p>
          <div className="social-icons flex items-center justify-center gap-4">
            <a href="#" className='text-black'><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='text-black'><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className='text-black'><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="col text-center">
          <img src="Images/img18.jpg" className='w-full' alt="" />
          <h2 className='font-serif text-xl uppercase mt-4'>Amber Green</h2>
          <p className='text-neutral-500 my-2'>Designer</p>
          <div className="social-icons flex items-center justify-center gap-4">
            <a href="#" className='text-black'><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='text-black'><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className='text-black'><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="col text-center">
          <img src="Images/img19.jpg" className='w-full' alt="" />
          <h2 className='font-serif text-xl uppercase mt-4'>Amely Hunter</h2>
          <p className='text-neutral-500 my-2'>Florist</p>
          <div className="social-icons flex items-center justify-center gap-4">
            <a href="#" className='text-black'><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='text-black'><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className='text-black'><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="col text-center">
          <img src="Images/img20.jpg" className='w-full' alt="" />
          <h2 className='font-serif text-xl uppercase mt-4'>Amber Green</h2>
          <p className='text-neutral-500 my-2'>Founder</p>
          <div className="social-icons flex items-center justify-center gap-4">
            <a href="#" className='text-black'><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='text-black'><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className='text-black'><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <img src="Images/img01.jpg" className='absolute bottom-0 left-0 z-0 hidden lg:block' alt="" />
    </section>
  );
};

export default OurTeam;
