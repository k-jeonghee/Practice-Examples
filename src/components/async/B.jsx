import React from 'react';

const B = () => {
	const handleClick = async () => {
		const stock = 0;
		let data;
		try {
			data = await new Promise((response, reject) => {
				console.log('1');
				if (stock === 0) {
					data = '🍠';
					reject('감자가 떨어졌어요');
				} else {
					response('🥔');
				}
			});
		} catch (err) {
			console.log(err);
		}

		try {
			const data2 = await new Promise((response, reject) => {
				response(`${data} + 🔥`);
			});
			console.log('2');

			const data3 = await new Promise((response, reject) => {
				response(`${data2} = 🍟`);
			});

			console.log('3');
			console.log(data3);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<button className="p-8 bg-green-400" onClick={handleClick}>
				감자튀김 만들기
			</button>
		</>
	);
};

export default B;
