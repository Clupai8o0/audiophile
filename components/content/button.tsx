import clsx from "clsx";
import { BaseComponentProps } from "@/lib/props";

interface Props extends BaseComponentProps {}

const Button = ({ className, children }: Props) => {
	return (
		<button
			className={clsx(
				"bg-[var(--fm-primary)] uppercase px-7 py-4 hover:bg-[var(--fm-primary-foreground)] font-bold text-[13px] tracking-[1px] ",
				className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
