import { BaseProps } from "@/lib/props";
import Sidebar from "./sidebar";
import clsx from "clsx";

interface Props extends BaseProps {}

const Navbar = ({ className }: Props) => {
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
					<li className="hover:text-[var(--fm-primary)] cursor-pointer">Home</li>
					<li className="hover:text-[var(--fm-primary)] cursor-pointer">Headphones</li>
					<li className="hover:text-[var(--fm-primary)] cursor-pointer">Speakers</li>
					<li className="hover:text-[var(--fm-primary)] cursor-pointer">Earphones</li>
				</ul>
			</div>

			<div>
				<img src="/shared/desktop/icon-cart.svg" alt="" />
			</div>
		</nav>
	);
};

export default Navbar;
