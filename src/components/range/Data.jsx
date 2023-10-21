import React, { useState } from 'react';
import CsvTest from '../components/CsvTest';
import SheetTest from './SheetTest';
import DataInput from './DataInput';

const Data = () => {
	const [data, setData] = useState([]);
	const [headers, setHeaders] = useState({
		brand: '',
		category: '',
		name: '',
		price: '',
		range: '',
		design: '',
		index: '',
	});

	let arrMm = [];
	let arr = [];
	let arr2 = [];
	let arrPm = [];
	const handleChange = (e) => {
		setHeaders((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const getData = () => {
		if (!headers.brand) {
			return;
		}
		let a = null;
		let b = null;

		//-/-
		for (let i = 0; i <= 24; i++) {
			a = i * -0.25;
			for (let j = 0; j <= 8; j++) {
				b = j * -0.25;
				arr.push({
					brand: headers.brand,
					category: headers.category,
					name: headers.name,
					price: parseInt(headers.price),
					range: headers.range,
					design: headers.design,
					index: parseFloat(headers.index),
					sph: parseFloat(a),
					cyl: parseFloat(b),
				});
			}
		}

		//+/+
		for (let i = 0; i <= 8; i++) {
			a = i * 0.25;
			for (let j = 1; j <= 8; j++) {
				b = j * 0.25;
				arr.push({
					brand: headers.brand,
					category: headers.category,
					name: headers.name,
					price: parseInt(headers.price),
					range: headers.range,
					design: headers.design,
					index: parseFloat(headers.index),
					sph: parseFloat(a),
					cyl: parseFloat(b),
				});
			}
		}
		//count = i-2
		let count = 7;
		for (let i = 9; i <= 16; i++) {
			a = i * 0.25;

			for (let j = 0; j <= count; j++) {
				b = j * 0.25;
				arr2.push({
					brand: headers.brand,
					category: headers.category,
					name: headers.name,
					price: parseInt(headers.price),
					range: headers.range,
					design: headers.design,
					index: parseFloat(headers.index),
					sph: parseFloat(a),
					cyl: parseFloat(b),
				});
			}
			count--;
		}
		const arrPp = arr.concat(arr2);
		// setData(newArr);

		//+/-
		for (let i = 1; i <= 16; i++) {
			a = i * 0.25;
			for (let j = 0; j <= 8; j++) {
				b = j * -0.25;
				arrPm.push({
					brand: headers.brand,
					category: headers.category,
					name: headers.name,
					price: parseInt(headers.price),
					range: headers.range,
					design: headers.design,
					index: parseFloat(headers.index),
					sph: parseFloat(a),
					cyl: parseFloat(b),
				});
			}
		}

		let finalData = arrMm.concat(arrPp, arrPm);

		setData(finalData);
	};

	const handleClick = () => {
		getData();
	};
	console.log(data);

	return (
		<>
			<div className="mb-4 flex flex-col">
				<DataInput headers={headers} handleChange={handleChange} />
			</div>

			<button
				onClick={handleClick}
				className="w-full bg-green-100 rounded-md p-4 mb-2"
			>
				Data Rendering
			</button>
			{/* {data && <CsvTest data={data} />} */}
			<SheetTest data={data} />
		</>
	);
};

export default Data;
