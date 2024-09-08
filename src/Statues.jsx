import React from "react";

const Statues = () => {
  return (
    <section className="relative h-96">
      <img
        src="Images/img12.jpg"
        className="w-full h-full object-cover"
        alt=""
      />
      <div className="overlay w-full h-full absolute left-0 top-0 bg-overlay"></div>
      <div className="container left-1/2 -translate-x-1/2 absolute grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 top-0 h-full items-center px-4">
        <div className="col text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-2 font-serif">86</h2>
          <p className="text-white text-lg md:text-xl uppercase font-serif">
            Blog Post
          </p>
        </div>
        <div className="col text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-2 font-serif">25</h2>
          <p className="text-white text-lg md:text-xl uppercase font-serif">
            Happy Clients
          </p>
        </div>
        <div className="col text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-2 font-serif">17</h2>
          <p className="text-white text-lg md:text-xl uppercase font-serif">
            Web Awards
          </p>
        </div>
        <div className="col text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-2 font-serif">98</h2>
          <p className="text-white text-lg md:text-xl uppercase font-serif">
            Flowers Sorts
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statues;
