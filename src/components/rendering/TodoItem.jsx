import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todoSlice from '../reducers/todoSlice';

const TodoItem = ({ todo }) => {
	console.log('TodoItem Render');
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { id, checked } = e.target;
		dispatch(
			todoSlice.actions.updateTodo({
				id,
				isCompleted: checked,
			})
		);
	};

	return (
		<li>
			<input
				type="checkBox"
				id={todo.id}
				value={!todo.isCompleted}
				checked={todo.isCompleted}
				onChange={handleChange}
			/>
			<p>{todo.content}</p>
		</li>
	);
};

export default memo(TodoItem);
