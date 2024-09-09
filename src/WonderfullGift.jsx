import React from 'react'

const WonderfullGift = () => {
  return (
    <section className='py-10 md:py-24'>
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 px-4 lg:px-0">
        <div className="text lg:w-1/2 w-full relative py-5">
          <img src="Images/img13.png" className='absolute -top-12 right-0 z-10 hidden lg:block' alt="" />
          <div className="text relative z-20">
            <h2 className="text-xl font-bold font-Handwrite">Wonderfull Gift</h2>
            <h1 className='text-3xl lg:text-5xl uppercase mt-4 font-serif'>A Perfect Spot</h1>
            <p className='my-4 text-neutral-600 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor tempore illo aliquid eos mollitia dolorum nesciunt assumenda optio, quod qui tenetur reiciendis aliquam modi earum, illum ducimus voluptatem est.</p>
            <button className='uppercase px-7 py-4 border border-black transition-all hover:bg-black hover:text-white'>Read More</button>
          </div>
        </div>
        <div className="image lg:w-1/2 w-full">
          <img src="Images/img14.jpg" className='w-full' alt="" />
        </div>
      </div>
    </section>
  )
}

export default WonderfullGift
