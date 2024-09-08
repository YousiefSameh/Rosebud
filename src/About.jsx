import React from 'react';

const About = () => {
  return (
    <section className="py-12 md:py-24 px-4">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        <div className="card flex flex-col text-center gap-6">
          <img src="Images/img05.png" className="w-14 mx-auto" alt="" />
          <h2 className="font-serif uppercase text-xl">Ready To Be Impressed</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ea?</p>
        </div>
        <div className="card flex flex-col text-center gap-6">
          <img src="Images/img06.png" className="w-14 mx-auto" alt="" />
          <h2 className="font-serif uppercase text-xl">Powerful Solutions</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ea?</p>
        </div>
        <div className="card flex flex-col text-center gap-6">
          <img src="Images/img07.png" className="w-14 mx-auto" alt="" />
          <h2 className="font-serif uppercase text-xl">Leaders Of Tomorrow</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ea?</p>
        </div>
      </div>
    </section>
  );
};

export default About;
