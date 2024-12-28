"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import Button from "@/components/content/button";
import Counter from "@/components/content/counter";
import Navbar from "@/components/navigation/navbar";
import Category from "@/components/content/category";
import Container from "@/components/containers/container";

import { categories, Product as ProductType } from "@/lib/data";
import { generateKey } from "@/lib/utils";
import { useEffect, useState } from "react";

function Product() {
	const router = useRouter();
	const pathname = usePathname();
	const slug = pathname.split("/").pop();

	const [product, setProduct] = useState<ProductType | null>(null);

	const handleLoadData = async () => {
		const resp = await fetch(`/api/product/${slug}`);
		const data = await resp.json();
		if (data.error) {
			console.error(data.error);
			return;
		}
		setProduct(data.product);
	};

	useEffect(() => {
		handleLoadData();
	}, []);

	return (
		<main className="space-y-4 md:space-y-8">
			<Container parentClassName="bg-[#000]">
				<Navbar />
			</Container>

			<Container className="px-6 lg:px-0">
				<span
					className="opacity-50 cursor-pointer hover:opacity-100"
					onClick={() => router.back()}
				>
					Go Back
				</span>
			</Container>

			<div className="space-y-16 md:space-y-24 pt-4 md:pt-0">
				<Container className="px-6 lg:px-0 flex flex-col md:flex-row md:justify-between gap-8">
					<div className="rounded-lg overflow-hidden md:w-1/2">
						<img
							src={product?.image.mobile}
							alt="headphones"
							className="mobile"
						/>
						<img
							src={product?.image.tablet}
							alt="headphones"
							className="tablet"
						/>
						<img
							src={product?.image.desktop}
							alt="headphones"
							className="desktop"
						/>
					</div>
					<div className="flex flex-col items-start gap-6 md:w-1/2 md:justify-center md:ml-16 lg:gap-6">
						{product?.newProduct && (
							<span className="font-overline text-[var(--fm-primary)]">
								NEW PRODUCT
							</span>
						)}
						<h1 className="h3 md:h2 max-w-md">{product?.name}</h1>
						<p className="opacity-50 max-w-xl">{product?.desc}</p>
						<span className="h6 font-bold tracking-[1.3px]">
							$ {product?.price}
						</span>
						<div className="flex items-center gap-4">
							<Counter />
							<Button>ADD TO CART</Button>
						</div>
					</div>
				</Container>

				<Container className="px-6 lg:px-0 space-y-12 lg:flex lg:flex-row lg:space-y-0">
					<div className="space-y-4 lg:w-2/3 lg:pr-24">
						<h1 className="h4 md:h3">Features</h1>
						{product?.features.split("\n\n").map((feature) => (
							<p className="opacity-50">{feature}</p>
						))}
					</div>
					<div className="space-y-6 md:space-y-0 md:flex md:flex-row lg:w-1/3 lg:flex-col lg:space-y-6">
						<h1 className="h4 md:h3 md:w-1/2 lg:w-full">IN THE BOX</h1>
						<ul className="space-y-2 md:w-1/2 lg:w-full">
							{product?.includes.map(({ quantity, item }) => (
								<li className="flex items-center gap-4">
									<span className="text-[var(--fm-primary)] font-bold">
										{quantity}x
									</span>
									<p className="opacity-50">{item}</p>
								</li>
							))}
						</ul>
					</div>
				</Container>

				<Container className="px-6 lg:px-0 space-y-6 md:space-y-0 md:flex md:flex-row md:items-center md:gap-6 lg:gap-10">
					<div className="flex flex-col gap-6 lg:gap-10 lg:w-2/5 h-full">
						<img
							src={product?.gallery.first.mobile}
							alt="headphones"
							className="mobile rounded-lg"
						/>
						<img
							src={product?.gallery.second.mobile}
							alt="headphones"
							className="mobile rounded-lg"
						/>
						<img
							src={product?.gallery.first.tablet}
							alt="headphones"
							className="tablet rounded-lg"
						/>
						<img
							src={product?.gallery.second.tablet}
							alt="headphones"
							className="tablet rounded-lg"
						/>
						<img
							src={product?.gallery.first.desktop}
							alt="headphones"
							className="desktop rounded-lg h-1/2 object-cover w-full"
						/>
						<img
							src={product?.gallery.second.desktop}
							alt="headphones"
							className="desktop rounded-lg h-1/2 object-cover w-full"
						/>
					</div>
					<div className="lg:w-3/5">
						<img
							src={product?.gallery.third.mobile}
							alt="headphones"
							className="mobile rounded-lg"
						/>
						<img
							src={product?.gallery.third.tablet}
							alt="headphones"
							className="tablet rounded-lg"
						/>
						<img
							src={product?.gallery.third.desktop}
							alt="headphones"
							className="desktop rounded-lg w-full h-full object-cover"
						/>
					</div>
				</Container>

				<Container className="px-6 lg:px-0 space-y-6">
					<h1 className="h4 md:h3">YOU MAY ALSO LIKE</h1>
					<div className="flex flex-col md:flex-row gap-8">
						{product?.otherProducts.map(({ image, name, slug }) => (
							<div className="flex flex-col items-center gap-4">
								<img
									src={image.mobile}
									alt=""
									className="mobile rounded-lg"
								/>
								<img
									src={image.tablet}
									alt=""
									className="tablet rounded-lg"
								/>
								<img
									src={image.desktop}
									alt=""
									className="desktop rounded-lg"
								/>
								<h2 className="h4">{name}</h2>
								<Link href={`/product/${slug}`}>
									<Button>SEE PRODUCT</Button>
								</Link>
							</div>
						))}
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
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</div>
				</Container>
			</div>
		</main>
	);
}

export default Product;
