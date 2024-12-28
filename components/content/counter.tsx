import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1)

	return (
		<div className="bg-[#f1f1f1] flex items-center gap-2 p-2">
			<button
				className="px-4 py-2 hover:text-[var(--fm-primary)] disabled:opacity-20"
				onClick={() => setCount((prevCount) => {
          if (prevCount === 1) return 1
          return prevCount - 1
        })}
        disabled={count === 1}
			>
				-
			</button>
			<span>{count}</span>
			<button
				className="px-4 py-2 hover:text-[var(--fm-primary)]"
				onClick={() => setCount((prevCount) => prevCount + 1)}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
