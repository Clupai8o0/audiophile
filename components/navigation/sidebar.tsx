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
				<SheetContent side="left">
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Sidebar;
