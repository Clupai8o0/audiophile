import { Input as _Input } from "../ui/input";

interface Props {
	label: string;
	placeholder: string;
	type?: string;
	value: any;
	setValue: React.Dispatch<React.SetStateAction<any>>;
}

const Input = ({ label, placeholder, type, value, setValue }: Props) => {
	return (
		<div>
			<label className="text-[12px] font-bold">{label}</label>
			<_Input
				placeholder={placeholder}
				className="text-[14px] px-4 py-6 font-bold placeholder:opacity-50 mt-1"
				type={type}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

export default Input;
