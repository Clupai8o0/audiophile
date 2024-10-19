import clsx from "clsx";
import { BaseComponentProps } from "@/lib/props";

interface Props extends BaseComponentProps {
	variant?: "primary" | "secondary" | "tertiary";
}

const Button = ({ className, children, variant }: Props) => {
	return (
		<button
			className={clsx(
				"uppercase px-7 py-4 font-bold text-[13px] tracking-[1px]",
				(!variant || variant === "primary") &&
					"bg-[var(--fm-primary)] hover:bg-[var(--fm-primary-foreground)] text-white",
				variant === "secondary" &&
					"bg-white border border-black hover:bg-black hover:text-white",
				variant === "tertiary" &&
					"bg-transparent border-none hover:text-[var(--fm-primary)] flex gap-4 items-center opacity-50",
				className
			)}
		>
			{children}
			{variant === "tertiary" && (
				<img src="/shared/desktop/icon-arrow-right.svg" alt="right arrow" />
			)}
		</button>
	);
};

export default Button;
