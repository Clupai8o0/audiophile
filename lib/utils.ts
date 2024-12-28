import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { v4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateKey = () => v4();

export function addCommas(num = 0) {
	if (num < 10) return num.toString();

	// convert number to string
	const str = num.toString();
	const final = str
		.split("")
		.reverse()
		.map((digit, i) => {
			if (i % 3 === 0) return digit + ",";
			return digit;
		})
		.reverse()
		.join("");
	return final.length > 3 ? final.slice(0, final.length - 1) : final;
}
