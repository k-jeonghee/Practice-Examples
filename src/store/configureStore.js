import { configureStore } from "@reduxjs/toolkit";
import sectionSlice from "../reducers/sectionSlice";
import todoSlice from "../reducers/todoSlice";
import counterSlice from "../reducers/counterSlice";

const store = configureStore({
  reducer: {
    section: sectionSlice.reducer,
    todo: todoSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export default store;
