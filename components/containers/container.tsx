import { BaseWrapperProps } from "@/lib/props";
import clsx from "clsx";

interface Props extends BaseWrapperProps {}

const Container = ({ className, children, id, parentClassName }: Props) => {
	return (
		<section
			className={clsx(
				"relative w-full flex justify-center snap-center overflow-hidden",
				parentClassName
			)}
			id={id}
		>
			<div
				className={clsx(
					"flex flex-col relative z-10 max-w-7xl w-full",
					className
				)}
			>
				{children}
			</div>
		</section>
	);
};

export default Container;
