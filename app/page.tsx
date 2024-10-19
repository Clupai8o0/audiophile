import Navbar from "@/components/navigation/navbar";

import Button from "@/components/content/button";
import Category from "@/components/content/category";

import Container from "@/components/containers/container";

import { categories } from "@/lib/data";
import { generateKey } from "@/lib/utils";

function HomePage() {
	return (
		<main>
			{/* HERO - NAV */}
			<Container
				parentClassName="bg-[#191919]"
				className="items-center lg:items-start"
			>
				<Navbar className="z-10" />

				{/* Background */}
				<img
					src="/home/mobile/image-header.jpg"
					alt="headphones hero image"
					className="absolute z-0 -top-8 opacity-50 md:hidden"
				/>
				<img
					src="/home/tablet/image-header.jpg"
					alt="headphones hero image"
					className="absolute z-0 md:-top-16 opacity-50 hidden md:block lg:hidden"
				/>
				<img
					src="/home/desktop/image-hero.jpg"
					alt="headphones hero image"
					className="absolute z-0 hidden lg:block w-[140%] h-full object-cover"
				/>

				{/* Contents */}
				<div className="text-white text-center lg:text-left flex flex-col gap-4 my-32 md:my-48 lg max-w-sm md:max-w-md">
					<h1 className="font-overline opacity-50">New Product</h1>
					<h2 className="h2 md:h1 z-10">XX99 Mark II Headphones</h2>
					<p className="opacity-75 mt-2 px-8 md:px-0">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast
					</p>
					<div className="z-10 mt-3">
						<Button>See Product</Button>
					</div>
				</div>
			</Container>

			{/* CATEGORIES */}
			<Container className="flex flex-col items-center px-6 mt-8 gap-4 lg:gap-6 md:flex-row">
				{categories.map((category) => (
					<Category {...category} key={generateKey()} />
				))}
			</Container>
		</main>
	);
}

export default HomePage;
