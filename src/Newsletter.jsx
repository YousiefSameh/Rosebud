import React from 'react';

const Newsletter = () => {
  return (
    <section className='pt-24'>
      <div className="images grid grid-cols-2 md:grid-cols-4">
        <img src="Images/img21.jpg" className='w-full' alt="" />
        <img src="Images/img22.jpg" className='w-full' alt="" />
        <img src="Images/img23.jpg" className='w-full' alt="" />
        <img src="Images/img24.jpg" className='w-full' alt="" />
      </div>
      <div className="content bg-specialBg flex items-center justify-center flex-col p-6 md:p-12">
        <h1 className='font-serif text-2xl md:text-3xl mb-5 uppercase text-center'>
          Subscribe To Our Weekly Newsletter
        </h1>
        <form action="" className='flex flex-col md:flex-row w-full md:w-1/2 mx-auto'>
          <input type="text" className='flex-1 bg-white px-4 py-2 mb-4 md:mb-0 md:mr-2' placeholder='Enter Your Mail Here'/>
          <button type='submit' className='w-full md:w-fit px-7 py-4 bg-black text-white font-serif uppercase'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
