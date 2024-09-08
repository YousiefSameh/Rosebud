import React from "react";

const Gift = () => {
	return (
		<section className="bg-specialBg py-12 md:py-24 px-4 md:px-0">
			<div className="heading flex items-center justify-center flex-col gap-6 text-center">
				<h2 className="font-Handwrite text-2xl md:text-3xl">Wonderful Gifts</h2>
				<h1 className="font-serif text-3xl md:text-5xl uppercase">
					Our Wonderful Arrangements
				</h1>
			</div>
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
				<div className="card text-center">
					<img src="Images/img08.jpg" className="w-full h-auto" alt="" />
					<span className="font-serif my-2 text-lg uppercase block">
						Orange Slik
					</span>
					<p className="text-gray-400">$350.00</p>
				</div>
				<div className="card text-center relative">
					<span className="absolute top-0 right-0 px-3 py-2 bg-neutral-800 text-white">
						Sold
					</span>
					<img src="Images/img09.jpg" className="w-full h-auto" alt="" />
					<span className="font-serif my-2 text-lg uppercase block">
						Orange Slik
					</span>
					<p className="text-gray-400">$350.00</p>
				</div>
				<div className="card text-center relative">
					<span className="absolute top-0 right-0 px-3 py-2 bg-neutral-800 text-white">
						Sale
					</span>
					<img src="Images/img10.jpg" className="w-full h-auto" alt="" />
					<span className="font-serif my-2 text-lg uppercase block">
						Orange Slik
					</span>
					<p className="text-gray-400">$350.00</p>
				</div>
				<div className="card text-center">
					<img src="Images/img11.jpg" className="w-full h-auto" alt="" />
					<span className="font-serif my-2 text-lg uppercase block">
						Orange Slik
					</span>
					<p className="text-gray-400">$350.00</p>
				</div>
			</div>
		</section>
	);
};

export default Gift;
