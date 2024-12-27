import Link from "next/link";

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

			{/* SPEAKER - ZX9 */}
			<Container
				className="mt-24 bg-[var(--fm-primary)] text-white px-6 py-16 flex flex-col lg:flex-row items-center text-center rounded-lg relative"
				parentClassName="px-6"
			>
				<div className="relative flex justify-center w-full h-full mb-8 lg:w-1/2">
					<img
						src="/home/mobile/image-speaker-zx9.png"
						alt="zx9 speaker"
						className="w-1/2 relative z-[5] md:hidden"
					/>
					<img
						src="/home/tablet/image-speaker-zx9.png"
						alt="zx9 speaker"
						className="w-1/4 relative z-[5] hidden md:block lg:hidden"
					/>
					<img
						src="/home/desktop/image-speaker-zx9.png"
						alt="zx9 speaker"
						className="w-[60%] absolute -bottom-1/4 z-[5] hidden lg:block"
					/>

					<img
						src="/home/desktop/pattern-circles.svg"
						alt="circular patterns"
						className="absolute -top-3/4 md:-top-[150%] lg:-top-1/4 -left-1/4 md:-left-[12.5%] lg:-left-1/4 z-[4] max-w-none w-[150%] md:w-[125%] lg:w-[150%]"
					/>
				</div>

				<div className="max-w-sm lg:w-1/2 flex flex-col items-center lg:items-start lg:text-left lg:ml-12 lg:my-16 relative z-10">
					<h2 className="h2 md:h1">ZX9 Speaker</h2>
					<p className="opacity-75 mt-4">
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<Link href="/product/zx9-speaker">
						<Button variant="secondary-reverse" className="mt-8 md:mt-10">
							See Product
						</Button>
					</Link>
				</div>
			</Container>

			{/* SPEAKER - ZX7 */}
			<Container
				className="mt-12 px-6 overflow-hidden rounded-lg"
				parentClassName="px-6"
			>
				<div className="w-full h-full">
					<img
						src="/home/mobile/image-speaker-zx7.jpg"
						alt="speaker zx7"
						className="w-full h-full absolute top-0 left-0 object-cover z-0 md:hidden"
					/>
					<img
						src="/home/tablet/image-speaker-zx7.jpg"
						alt="speaker zx7"
						className="w-full h-full absolute top-0 left-0 object-cover z-0 hidden md:block lg:hidden"
					/>
					<img
						src="/home/desktop/image-speaker-zx7.jpg"
						alt="speaker zx7"
						className="w-full h-full absolute top-0 left-0 object-cover z-0 hidden lg:block"
					/>
				</div>
				<div className="flex flex-col gap-8 relative z-10 my-24 md:ml-12">
					<h2 className="h3">ZX7 Speaker</h2>
					<Link href="/product/zx7-speaker">
						<Button variant="secondary">SEE PRODUCT</Button>
					</Link>
				</div>
			</Container>

			{/* EARPHONES - YX1 */}
			<Container className="mt-12 px-6 lg:px-0 flex flex-col md:flex-row gap-6">
				<div className="rounded-lg overflow-hidden h-60 md:h-72 w-full relative md:w-1/2">
					<img
						src="/home/mobile/image-earphones-yx1.jpg"
						alt="Earphones yx1"
						className="mobile absolute w-full h-full object-cover"
					/>
					<img
						src="/home/tablet/image-earphones-yx1.jpg"
						alt="Earphones yx1"
						className="tablet absolute w-full h-full object-cover"
					/>
					<img
						src="/home/desktop/image-earphones-yx1.jpg"
						alt="Earphones yx1"
						className="desktop absolute w-full h-full object-cover"
					/>
				</div>
				<div className="rounded-lg overflow-hidden bg-[var(--fm-foreground)] py-16 px-6 lg:px-12 flex flex-col justify-center gap-6 md:w-1/2">
					<h2 className="h3">YX1 Earphones</h2>
					<Link href="/product/yx1-earphones">
						<Button variant="secondary">See Product</Button>
					</Link>
				</div>
			</Container>

			{/* BEST GEAR */}
			<Container className="mt-12 px-6 lg:px-0 flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-8 lg:gap-0">
				<div className="lg:w-1/2">
					<img src="/shared/mobile/image-best-gear.jpg" alt="man with earphones" className="mobile w-full h-full object-cover rounded-lg" />
					<img src="/shared/tablet/image-best-gear.jpg" alt="man with earphones" className="tablet w-full h-full object-cover rounded-lg" />
					<img src="/shared/desktop/image-best-gear.jpg" alt="man with earphones" className="desktop w-full h-full object-cover rounded-lg" />
				</div>
				<div className="text-center flex flex-col lg:items-start gap-4 max-w-xl lg:w-1/2 lg:text-left lg:gap-8 lg:max-w-lg">
					<h2 className="h3 md:h2">
						Bringing you the <span className="text-[var(--fm-primary)]">best</span> audio gear
					</h2>
					<p className="opacity-50">
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>
			</Container>
		</main>
	);
}

export default HomePage;
