import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [] 
  };

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = { id: Date.now(), text: action.payload };
            state.tasks.push(newTask);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
});

export const { addTask, removeTask } = todosSlice.actions;
export default todosSlice.reducer;