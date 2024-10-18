import { BaseWrapperProps } from "@/lib/props";
import clsx from "clsx";

interface Props extends BaseWrapperProps {}

const Wrapper = ({ className, children, id, parentClassName }: Props) => {
	return (
		<section
			className={clsx(
				"relative p w-full flex justify-center snap-center",
				parentClassName
			)}
			id={id}
		>
			<div
				className={clsx(
					"flex flex-col relative z-10 max-w-7xl w-full py-28",
					className
				)}
			>
				{children}
			</div>
		</section>
	);
};

export default Wrapper;
