import Navbar from "@/components/navigation/navbar";

import Container from "@/components/containers/container";
import Button from "@/components/content/button";

function HomePage() {
	return (
		<main>
			<Container parentClassName="bg-[var(--fm-secondary)]" className="items-center">
				<Navbar className="z-10" />

				{/* Background */}
				<img
					src="/home/mobile/image-header.jpg"
					alt="headphones hero image"
					className="absolute z-0 -top-8 opacity-50"
				/>

				{/* Contents */}
				<div className="text-white text-center flex flex-col gap-4 my-32 max-w-sm">
					<h1 className="font-overline opacity-50">New Product</h1>
					<h2 className="h2 z-10">XX99 Mark II Headphones</h2>
					<p className="opacity-75 mt-2 px-8">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast
					</p>
					<div className="z-10 mt-3">
						<Button>See Product</Button>
					</div>
				</div>
			</Container>
		</main>
	);
}

export default HomePage;
