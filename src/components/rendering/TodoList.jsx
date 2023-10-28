import { createSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const selectTodoIds = (state) => {
	console.log('부모');
	return state.todo.map((todo) => todo.id);
};

const TodoList = () => {
	console.log('TodoList Render');
	const todos = useSelector(selectTodoIds);

	const renderedListItems = todos.map((todoId) => {
		return <TodoItem key={todoId} todoId={todoId} />;
	});
	return (
		<div>
			<ul>{renderedListItems}</ul>
		</div>
	);
};

export default TodoList;
