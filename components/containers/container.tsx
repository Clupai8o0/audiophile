import { BaseWrapperProps } from "@/lib/props";
import clsx from "clsx";

interface Props extends BaseWrapperProps {
	background?: React.ReactNode;
}

const Container = ({ className, children, id, parentClassName, background }: Props) => {
	return (
		<section
			className={clsx(
				"relative w-full flex justify-center snap-center overflow-hidden",
				parentClassName
			)}
			id={id}
		>
			{background}
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
