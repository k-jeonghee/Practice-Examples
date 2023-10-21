import React, { useState } from 'react';
import Country from './Country';

const A = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			<button
				className="w-full bg-blue-300 mb-4 p-4 rounded-md"
				onClick={handleClick}
			>
				나라 정보 불러오기
			</button>
			<ul className="overflow-y-auto h-64 border border-gray-200">
				{toggle && <Country />}
			</ul>
		</div>
	);
};

export default A;
