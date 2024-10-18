import { BaseProps } from "@/lib/props";
import Sidebar from "./sidebar";
import clsx from "clsx";

interface Props extends BaseProps {}

const Navbar = ({ className }: Props) => {
	return (
		<nav
			className={clsx(
				"flex justify-between w-full px-6 py-7 border-b border-white border-opacity-10 relative",
				className,
			)}
		>
			<Sidebar />

			<img src="/shared/desktop/logo.svg" alt="Audiophile logo" />

			<div className="hidden">
				<ul className="flex">
					<li>Home</li>
					<li>Headphones</li>
					<li>Speakers</li>
					<li>Earphones</li>
				</ul>
			</div>

			<div>
				<img src="/shared/desktop/icon-cart.svg" alt="" />
			</div>
		</nav>
	);
};

export default Navbar;
