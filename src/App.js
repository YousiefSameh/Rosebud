import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Gift from "./Gift";
import Statues from "./Statues";
import WonderfullGift from "./WonderfullGift";
import Testimolina from "./Testimolina";

const App = () => {
	const [ToUp, setToUp] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsScroll(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<main className="font-Poppins">
			<button
				className={`${
					isScroll ? "block" : "hidden"
				} transition-all px-4 py-2 rounded-full bg-neutral-800 text-white fixed bottom-4 right-3 z-40 text-lg`}
				onClick={() => setToUp((document.documentElement.scrollTop = 0))}
			>
				<i class="fa-solid fa-arrow-up"></i>
			</button>
			<Hero />
			<About />
			<Gift />
			<Statues />
			<WonderfullGift />
			<Testimolina />
		</main>
	);
};

export default App;
