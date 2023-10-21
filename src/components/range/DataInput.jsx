import React from 'react';

const DataInput = ({ headers, handleChange }) => {
	return (
		<>
			<label htmlFor="brand" className="mb-2">
				브랜드
			</label>
			<input
				id="brand"
				type="text"
				className="border border-gray-200 p-2 rounded-md"
				value={headers.brand}
				onChange={handleChange}
			/>
			<label htmlFor="category" className="mb-2">
				품목
			</label>
			<input
				id="category"
				type="text"
				className="border border-gray-200 p-2 rounded-md"
				value={headers.category}
				onChange={handleChange}
			/>
			<label htmlFor="name" className="mb-2">
				상품명
			</label>
			<input
				id="name"
				type="text"
				className="border border-gray-200 p-2 rounded-md"
				value={headers.name}
				onChange={handleChange}
			/>
			<label htmlFor="price" className="mb-2">
				가격
			</label>
			<input
				id="price"
				type="number"
				className="border border-gray-200 p-2 rounded-md"
				value={headers.price}
				onChange={handleChange}
			/>
			<label htmlFor="range" className="mb-2">
				범위
			</label>
			<input
				id="range"
				type="text"
				className="border border-gray-200 p-2 rounded-md"
				value={headers.range}
				onChange={handleChange}
			/>
			<label htmlFor="design" className="mb-2">
				디자인
			</label>
			<input
				id="design"
				type="text"
				className="border border-gray-200 p-2 rounded-md"
				value={headers.design}
				onChange={handleChange}
			/>
			<label htmlFor="index" className="mb-2">
				굴절률
			</label>
			<input
				id="index"
				type="number"
				className="border border-gray-200 p-2 rounded-md"
				value={headers.index}
				onChange={handleChange}
			/>
		</>
	);
};

export default DataInput;
