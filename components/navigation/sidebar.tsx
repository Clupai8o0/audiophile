import clsx from "clsx";
import { BaseProps } from "@/lib/props";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
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
								Home
							</li>
							<li className="hover:text-[var(--fm-primary)] cursor-pointer">
								Headphones
							</li>
							<li className="hover:text-[var(--fm-primary)] cursor-pointer">
								Speakers
							</li>
							<li className="hover:text-[var(--fm-primary)] cursor-pointer">
								Earphones
							</li>
						</ul>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Sidebar;
