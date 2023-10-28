import React, { memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import orderSlice from '../../reducers/orderSlice';

const Form = () => {
	console.log('Form Render');
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.target.value);
	};

	const nextId = useRef(4);
	const handleCreate = () => {
		const newOrder = {
			id: nextId.current,
			name: text,
			isCompleted: false,
		};
		dispatch(orderSlice.actions.create(newOrder));
		nextId.current += 1;
		setText('');
	};

	return (
		<div className="h-8 flex mb-4">
			<input
				type="text"
				placeholder="주문 내역을 입력해주세요."
				className="border border-gray-300 w-96 px-2 h-full"
				value={text}
				onChange={handleChange}
			/>
			<button
				onClick={handleCreate}
				className="bg-gray-100 h-full px-4 text-xs ml-2 rounded-md hover:bg-gray-50 flex-1"
			>
				등록
			</button>
		</div>
	);
};

export default memo(Form);
