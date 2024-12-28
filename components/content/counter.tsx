import React, { useState } from "react";

interface Props {
	initialCount: number;
	addCount: () => void;
	removeCount: () => void;
	disableRemoveBoundary?: boolean;
}

const Counter = ({ initialCount, addCount, removeCount, disableRemoveBoundary }: Props) => {
	const [count, setCount] = useState(initialCount);

	return (
		<div className="bg-[#f1f1f1] flex items-center gap-2 p-2 rounded-lg">
			<button
				className="px-4 py-0 hover:text-[var(--fm-primary)] disabled:opacity-20"
				onClick={() => {
					setCount((prevCount) => {
						if (disableRemoveBoundary && prevCount === 1) return 1;
						return prevCount - 1;
					});
					removeCount();
				}}
				disabled={disableRemoveBoundary && count === 1}
			>
				-
			</button>
			<span>{count}</span>
			<button
				className="px-4 py-0 hover:text-[var(--fm-primary)]"
				onClick={() => {
					setCount((prevCount) => prevCount + 1);
					addCount();
				}}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
