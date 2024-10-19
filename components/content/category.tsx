import clsx from "clsx";
import Link from "next/link";

import Button from "./button";
import { BaseProps } from "@/lib/props";

interface Props extends BaseProps {
	name: string;
	url: string;
	src: string;
}

const Category = ({ className, name, url, src }: Props) => {
	return (
		<div className={clsx("relative w-full pt-20", className)}>
			<img
				src={src}
				alt="speaker"
				className="absolute w-1/2 left-1/4 top-0"
			/>

			<div className="flex flex-col items-center bg-secondary w-full pb-2 pt-24 rounded-lg">
				<h3 className="h6 font-[15px] md:font-lg">{name}</h3>
				<Link href={url}>
					<Button variant="tertiary">Shop</Button>
				</Link>
			</div>
		</div>
	);
};

export default Category;
