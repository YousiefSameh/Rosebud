import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

const Testimolina = () => {
	return (
    <section className="py-10 lg:py-24 h-screen">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="content relative h-full">
            <div className="overlay absolute h-full w-full bg-black/40"></div>
            <img
              src="Images/img12.jpg"
              className="w-screen h-screen object-cover z-20"
              alt="Slide 1"
            />
            <div className="text absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-center flex flex-col gap-4 w-full md:w-fit">
              <h2 className="font-Handwrite text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                Testimolina
              </h2>
              <h1 className="font-serif text-3xl sm:text-4xl uppercase lg:text-5xl text-white">
                An Experinced Delevired
              </h1>
              <p className="mt-4 text-gray-400 text-sm lg:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quos doloremque obcaecati, deleniti accusamus incidunt, porro, sequi reprehenderit totam ullam eveniet fugiat! Laborum maxime dolore assumenda ullam odit dicta vitae.
              </p>
              <span className="mt-4 text-sm lg:text-lg text-white block uppercase font-serif">Helen Malone</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content relative h-full">
            <div className="overlay absolute h-full w-full bg-black/40"></div>
            <img
              src="Images/img14.jpg"
              className="w-screen h-screen object-cover z-20"
              alt="Slide 2"
            />
            <div className="text absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-center flex flex-col gap-4 w-full md:w-fit">
              <h2 className="font-Handwrite text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                Testimolina
              </h2>
              <h1 className="font-serif text-3xl sm:text-4xl uppercase lg:text-5xl text-white">
                An Experinced Delevired
              </h1>
              <p className="mt-4 text-gray-400 text-sm lg:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quos doloremque obcaecati, deleniti accusamus incidunt, porro, sequi reprehenderit totam ullam eveniet fugiat! Laborum maxime dolore assumenda ullam odit dicta vitae.
              </p>
              <span className="mt-4 text-sm lg:text-lg text-white block uppercase font-serif">Helen Malone</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content relative h-full">
            <div className="overlay absolute h-full w-full bg-black/40"></div>
            <img
              src="Images/img15.jpg"
              className="w-screen h-screen object-cover z-20"
              alt="Slide 3"
            />
            <div className="text absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 text-center flex flex-col gap-4 w-full md:w-fit">
              <h2 className="font-Handwrite text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                Testimolina
              </h2>
              <h1 className="font-serif text-3xl sm:text-4xl uppercase lg:text-5xl text-white">
                An Experinced Delevired
              </h1>
              <p className="mt-4 text-gray-400 text-sm lg:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quos doloremque obcaecati, deleniti accusamus incidunt, porro, sequi reprehenderit totam ullam eveniet fugiat! Laborum maxime dolore assumenda ullam odit dicta vitae.
              </p>
              <span className="mt-4 text-sm lg:text-lg text-white block uppercase font-serif">Helen Malone</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
	);
};

export default Testimolina;
