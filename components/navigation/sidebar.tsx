import clsx from "clsx";
import Link from "next/link";

import { BaseProps } from "@/lib/props";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "../ui/sheet";

interface Props extends BaseProps {}

const Sidebar = ({ className }: Props) => {
	return (
		<div className={clsx("", className)}>
			<Sheet>
				<SheetTrigger>
					<img
						src="/shared/tablet/icon-hamburger.svg"
						alt="hamburger icon for sidebar"
					/>
				</SheetTrigger>
				<SheetContent side="left" className="flex pt-24">
					<div>
						<ul className="flex flex-col items-start h6 gap-4">
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
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Sidebar;
