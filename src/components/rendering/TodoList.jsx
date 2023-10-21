import { createSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import FilterHeader from './FilterHeader';
import todoSlice from '../reducers/todoSlice';
import TodoItem from './TodoItem';

const getFilteredItem = (todos, filter = 'all') => {
	console.log('getFilteredItem');
	switch (filter) {
		case 'all':
			return todos;
		case 'completed':
			return todos.filter((item) => item.isCompleted);
		case 'uncompleted':
			return todos.filter((item) => !item.isCompleted);
		default:
			return todos;
	}
};
// const todoSelector = (state) => {
//   console.log("todoSelector");
//   return state.todo;
// };
const filteredTodo = createSelector(
	(state) => {
		console.log('first selector');
		return state.todo;
	},
	(todo) => {
		return getFilteredItem(todo);
	}
);

const selectTodoIds = (state) => state.todo.map((todo) => todo.id);

const TodoList = () => {
	console.log('TodoList Render');
	const todos = useSelector((state) => state.todo);

	// const filteredList = useSelector((state) => {
	//   console.log("first selector");
	//   // return state.todo.filter((item) => item.isCompleted);
	//   return getFilteredItem(state.todo);
	// });

	// const filteredList = useMemo(() => {
	//   return getFilteredItem(todos);
	// }, [todos]);

	// const filteredList = getFilteredItem(todos);

	// const todos = useSelector(filteredTodo, shallowEqual);
	return (
		<div>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
