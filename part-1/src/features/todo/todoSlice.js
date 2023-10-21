import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // reducers
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        time: new Date().toISOString(),
        status: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
