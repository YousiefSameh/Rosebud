import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.css';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <header className="h-screen relative">
      <Navbar />
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="content relative h-full">
            <div className="overlay absolute h-full w-full bg-black/40"></div>
            <img src="Images/img12.jpg" className="w-screen h-screen object-cover z-20" alt="Slide 1" />
            <div className="text absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-center flex flex-col gap-4">
              <h2 className="font-Handwrite text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                Welcome To Rosebud
              </h2>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
                Time To Blossom
              </h1>
              <p className="mt-4 text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="flex items-center gap-4 justify-center mt-4">
                <button className="py-2 px-4 sm:py-4 sm:px-6 border border-white uppercase bg-white text-black transition-all hover:bg-transparent hover:text-white">
                  <a href="#">Read More</a>
                </button>
                <button className="py-2 px-4 sm:py-4 sm:px-6 border border-white uppercase text-white transition-all hover:text-black hover:bg-white">
                  <a href="#">Learn More</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content relative h-full">
            <div className="overlay absolute h-full w-full bg-black/40"></div>
            <img src="Images/img14.jpg" className="w-screen h-screen object-cover z-20" alt="Slide 2" />
            <div className="text absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-center flex flex-col gap-4">
              <h2 className="font-Handwrite text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                Discover Our Garden
              </h2>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
                Nature’s Elegance
              </h1>
              <p className="mt-4 text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl">
                Experience the beauty of nature with every bloom.
              </p>
              <div className="flex items-center gap-4 justify-center mt-4">
                <button className="py-2 px-4 sm:py-4 sm:px-6 border border-white uppercase bg-white text-black transition-all hover:bg-transparent hover:text-white">
                  <a href="#">Explore</a>
                </button>
                <button className="py-2 px-4 sm:py-4 sm:px-6 border border-white uppercase text-white transition-all hover:text-black hover:bg-white">
                  <a href="#">Gallery</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content relative h-full">
            <div className="overlay absolute h-full w-full bg-black/40"></div>
            <img src="Images/img15.jpg" className="w-screen h-screen object-cover z-20" alt="Slide 3" />
            <div className="text absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-center flex flex-col gap-4">
              <h2 className="font-Handwrite text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                Cherish Every Moment
              </h2>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
                A Place of Serenity
              </h1>
              <p className="mt-4 text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl">
                Find peace and tranquility in our natural haven.
              </p>
              <div className="flex items-center gap-4 justify-center mt-4">
                <button className="py-2 px-4 sm:py-4 sm:px-6 border border-white uppercase bg-white text-black transition-all hover:bg-transparent hover:text-white">
                  <a href="#">Visit Us</a>
                </button>
                <button className="py-2 px-4 sm:py-4 sm:px-6 border border-white uppercase text-white transition-all hover:text-black hover:bg-white">
                  <a href="#">Contact</a>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default Hero;
