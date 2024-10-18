import clsx from "clsx";
import { BaseComponentProps, BaseProps } from "@/lib/props";

interface Props extends BaseComponentProps {}

const Component = ({ className, children }: Props) => {
	return <div className={clsx("", className)}>{children}</div>;
};

export default Component;
