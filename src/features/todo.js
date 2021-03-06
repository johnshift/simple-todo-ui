import { createSlice } from '@reduxjs/toolkit';

const initState = {
  lastID: 0, // need to automate this in backend
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.todoList = payload;
    },
    addTodo: (state, { payload }) => {
      state.todoList.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== payload.id);
    },
    updateTodo: (state, { payload }) => {
      for (let i = 0; i < state.todoList.length; i += 1) {
        if (payload.id === state.todoList[i].id) {
          state.todoList[i] = payload;
          break;
        }
      }
    },
  },
});

export const {
  addTodo, deleteTodo, setTodos, updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
