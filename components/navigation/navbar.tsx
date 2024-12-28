import clsx from "clsx";
import Link from "next/link";

import { BaseProps } from "@/lib/props";
import Sidebar from "./sidebar";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { useCartStore } from "@/lib/state";
import Button from "../content/button";
import Counter from "../content/counter";
import { use, useEffect, useState } from "react";
import { products as allProducts } from "@/lib/data";
import { addCommas, generateKey } from "@/lib/utils";

interface Props extends BaseProps {}

interface CartItemState {
	slug: string;
	img: string;
	name: string;
	price: number;
	quantity: number;
}

const Navbar = ({ className }: Props) => {
	const products = useCartStore((state) => state.products);
	const addProduct = useCartStore((state) => state.addProduct);
	const removeProduct = useCartStore((state) => state.removeProduct);
	const clearCart = useCartStore((state) => state.clearCart);

	const [finalCart, setFinalCart] = useState<CartItemState[]>([]);
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		const previewCart: CartItemState[] = [];
		products.forEach((slug) => {
			// if the product already exists in the final cart, ignore it
			if (previewCart.find((p) => p.slug === slug)) return;

			const product = allProducts.find((p) => p.slug === slug);
			if (!product) return;
			previewCart.push({
				slug: product?.slug || "",
				img: product?.image.mobile || "",
				name: product?.name || "",
				price: product?.price || 0,
				quantity: products.filter((p) => p === slug).length,
			});
		});
		setFinalCart(previewCart);
	}, [products]);

	useEffect(() => {
		const total = finalCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
		setTotalPrice(total);
	}, [finalCart]);

	return (
		<nav
			className={clsx(
				"flex justify-between w-full px-6 py-7 border-b border-white border-opacity-10 relative lg:px-0",
				className
			)}
		>
			<div className="flex gap-10">
				<Sidebar className="lg:hidden" />
				<img
					src="/shared/desktop/logo.svg"
					alt="Audiophile logo"
					className="hidden md:block"
				/>
			</div>

			<img
				src="/shared/desktop/logo.svg"
				alt="Audiophile logo"
				className="md:hidden"
			/>

			<div className="hidden lg:block">
				<ul className="flex sub-title text-white gap-9">
					<li className="hover:text-[var(--fm-primary)] cursor-pointer">
						<Link href="/">Home</Link>
					</li>
					<li className="hover:text-[var(--fm-primary)] cursor-pointer">
						<Link href="/category/headphones">Headphones</Link>
					</li>
					<li className="hover:text-[var(--fm-primary)] cursor-pointer">
						<Link href="/category/speakers">Speakers</Link>
					</li>
					<li className="hover:text-[var(--fm-primary)] cursor-pointer">
						<Link href="/category/earphones">Earphones</Link>
					</li>
				</ul>
			</div>

			<div>
				<Dialog>
					<DialogTrigger>
						<img src="/shared/desktop/icon-cart.svg" alt="" />
					</DialogTrigger>
					<DialogContent className="lg:left-[75%] lg:top-36">
						<DialogHeader>
							<div className="flex flex-row justify-between items-start pt-4">
								<DialogTitle className="h4">
									CART ({finalCart.length})
								</DialogTitle>
								<button className="opacity-50 hover:underline" onClick={clearCart}>
									Remove all Items
								</button>
							</div>

							{products.length === 0 ? (
								<div className="p-6 flex items-center justify-center">
									<h2 className="text-lg opacity-40">Your cart is empty</h2>
								</div>
							) : (
								<div className="flex flex-col gap-4 pt-4">
									{finalCart.map(({ img, name, price, quantity, slug }) => (
										<div
											className="flex justify-between items-center gap-4"
											key={generateKey()}
										>
											<img
												src={img}
												className="w-16 h-16 rounded-lg object-cover"
											/>
											<div className="flex flex-col items-start max-w-28">
												<h2 className="sub-title truncate w-full">{name}</h2>
												<p className="font-bold opacity-50">$ {addCommas(price)}</p>
											</div>
											<Counter
												initialCount={quantity}
												addCount={() => addProduct(slug)}
												removeCount={() => removeProduct(slug)}
											/>
										</div>
									))}
								</div>
							)}
						</DialogHeader>
						<DialogFooter className="flex-col space-y-6">
							<div className="flex justify-between">
								<span className="opacity-50">TOTAL</span>
								<span className="h6 font-bold">$ {addCommas(totalPrice)}</span>
							</div>

							<Button>CHECKOUT</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</nav>
	);
};

export default Navbar;
