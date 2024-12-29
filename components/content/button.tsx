import clsx from "clsx";
import { BaseComponentProps } from "@/lib/props";

interface Props extends BaseComponentProps {
	variant?: "primary" | "secondary" | "secondary-reverse" | "tertiary";
	onClick?: () => void;
	disabled?: boolean;
}

const Button = ({ className, disabled, onClick, children, variant }: Props) => {
	return (
		<button
			className={clsx(
				"uppercase px-7 py-4 font-bold text-[13px] tracking-[1px]",
				(!variant || variant === "primary") &&
					"bg-[var(--fm-primary)] hover:bg-[var(--fm-primary-foreground)] text-white",
				variant === "secondary" &&
					"border border-black hover:bg-black hover:text-white",
				variant === "secondary-reverse" && "bg-black text-white border border-black hover:bg-transparent",
				variant === "tertiary" &&
					"bg-transparent border-none hover:text-[var(--fm-primary)] flex gap-4 items-center opacity-50",
				className
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
			{variant === "tertiary" && (
				<img src="/shared/desktop/icon-arrow-right.svg" alt="right arrow" />
			)}
		</button>
	);
};

export default Button;
