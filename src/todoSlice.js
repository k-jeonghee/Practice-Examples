import { createSelector, createSlice } from "@reduxjs/toolkit";

// const todoSelector = (state)=> state.todo
// const filteredTodo = createSelector(todoSelector, (todo) =>
// todo.filter((v) => v.id === 3)
// );

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, content: "1번 할일", isCompleted: false },
    { id: 2, content: "2번 할일", isCompleted: false },
    { id: 3, content: "3번 할일", isCompleted: true },
  ],
  reducers: {
    updateTodo: (state, action) => {
      const item = state.find((v) => v.id === parseInt(action.payload.id));
      item.isCompleted = action.payload.isCompleted;
    },
    testTodo: (state, action) => {
      const item = state.find((v) => v.id === parseInt(action.payload.id));
      item.content += 1;
    },
  },
});
export default todoSlice;

// const todo = useSelector((state) => {
//   console.log("적용 전");
//   return state.todo.filter((v) => v.id === 1);
// });

// const todoSelector = (state) => state.todo;
// const filteredTodo = createSelector(todoSelector, (todo) => {
//   console.log("적용 후");
//   return todo.filter((v) => v.id === 1);
// });
// const todo = useSelector(filteredTodo);
