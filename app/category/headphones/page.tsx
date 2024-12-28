"use client";

import Container from "@/components/containers/container";
import Button from "@/components/content/button";
import Category from "@/components/content/category";
import Navbar from "@/components/navigation/navbar";
import { categories } from "@/lib/data";
import { generateKey } from "@/lib/utils";
import Link from "next/link";

function CategoryHeadphones() {
	return (
		<main className="space-y-8 md:space-y-24">
			<Container parentClassName="bg-[#000]" className="flex items-center">
				<Navbar />
				<h1 className="h2 text-white my-12 md:my-20">Headphones</h1>
			</Container>

			<Container className="px-6 lg:px-0 flex flex-col lg:flex-row lg:justify-between gap-8">
				<div className="rounded-lg overflow-hidden lg:w-1/2">
					<img
						src="/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
						alt="headphones"
						className="mobile"
					/>
					<img
						src="/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
						alt="headphones"
						className="tablet"
					/>
					<img
						src="/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
						alt="headphones"
						className="desktop"
					/>
				</div>
				<div className="flex flex-col items-center gap-6 text-center lg:w-1/2 lg:text-left lg:items-start lg:justify-center lg:ml-16 lg:gap-6">
					<span className="font-overline text-[var(--fm-primary)]">
						NEW PRODUCT
					</span>
					<h1 className="h3 md:h2 max-w-md">XX99 MARK II HEADPHONES</h1>
					<p className="opacity-50 max-w-xl">
						The new XX99 Mark II headphones is the pinnacle of pristine audio.
						It redefines your premium headphone experience by reproducing the
						balanced depth and precision of studio-quality sound.
					</p>
					<Link href="/product/xx99-mark-two-headphones">
						<Button>SEE PRODUCT</Button>
					</Link>
				</div>
			</Container>

			<Container className="px-6 lg:px-0 flex flex-col lg:flex-row-reverse lg:justify-between gap-8">
				<div className="rounded-lg overflow-hidden lg:w-1/2">
					<img
						src="/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
						alt="headphones"
						className="mobile"
					/>
					<img
						src="/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
						alt="headphones"
						className="tablet"
					/>
					<img
						src="/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
						alt="headphones"
						className="desktop"
					/>
				</div>
				<div className="flex flex-col items-center gap-6 text-center lg:w-1/2 lg:text-left lg:items-start lg:justify-center lg:mr-16 lg:gap-6">
					<h1 className="h3 md:h2 max-w-md">XX99 MARK I HEADPHONES</h1>
					<p className="opacity-50 max-w-xl">
						As the gold standard for headphones, the classic XX99 Mark I offers
						detailed and accurate audio reproduction for audiophiles, mixing
						engineers, and music aficionados alike in studios and on the go.
					</p>
					<Link href="/product/xx99-mark-one-headphones">
						<Button>SEE PRODUCT</Button>
					</Link>
				</div>
			</Container>

			<Container className="px-6 lg:px-0 flex flex-col lg:flex-row lg:justify-between gap-8">
				<div className="rounded-lg overflow-hidden lg:w-1/2">
					<img
						src="/product-xx59-headphones/mobile/image-category-page-preview.jpg"
						alt="headphones"
						className="mobile"
					/>
					<img
						src="/product-xx59-headphones/tablet/image-category-page-preview.jpg"
						alt="headphones"
						className="tablet"
					/>
					<img
						src="/product-xx59-headphones/desktop/image-category-page-preview.jpg"
						alt="headphones"
						className="desktop"
					/>
				</div>
				<div className="flex flex-col items-center gap-6 text-center lg:w-1/2 lg:text-left lg:items-start lg:justify-center lg:ml-16 lg:gap-6">
					<h1 className="h3 md:h2 max-w-md">XX59 MARK HEADPHONES</h1>
					<p className="opacity-50 max-w-xl">
						Enjoy your audio almost anywhere and customize it to your specific
						tastes with the XX59 headphones. The stylish yet durable versatile
						wireless headset is a brilliant companion at home or on the move.
					</p>
					<Link href="/product/xx59-headphones">
						<Button>SEE PRODUCT</Button>
					</Link>
				</div>
			</Container>

			<Container className="flex flex-col items-center px-6 mt-8 gap-4 lg:gap-6 md:flex-row">
				{categories.map((category) => (
					<Category {...category} key={generateKey()} />
				))}
			</Container>

			{/* BEST GEAR */}
			<Container className="px-6 lg:px-0 flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-8 lg:gap-0">
				<div className="lg:w-1/2">
					<img
						src="/shared/mobile/image-best-gear.jpg"
						alt="man with earphones"
						className="mobile w-full h-full object-cover rounded-lg"
					/>
					<img
						src="/shared/tablet/image-best-gear.jpg"
						alt="man with earphones"
						className="tablet w-full h-full object-cover rounded-lg"
					/>
					<img
						src="/shared/desktop/image-best-gear.jpg"
						alt="man with earphones"
						className="desktop w-full h-full object-cover rounded-lg"
					/>
				</div>
				<div className="text-center flex flex-col lg:items-start gap-4 max-w-xl lg:w-1/2 lg:text-left lg:gap-8 lg:max-w-lg">
					<h2 className="h3 md:h2">
						Bringing you the{" "}
						<span className="text-[var(--fm-primary)]">best</span> audio gear
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

export default CategoryHeadphones;
