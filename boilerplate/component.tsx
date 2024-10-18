import clsx from "clsx";
import { BaseProps } from "@/lib/props";

interface Props extends BaseProps {}

const Component = ({ className }: Props) => {
	return <div className={clsx("", className)}>Component</div>;
};

export default Component;
