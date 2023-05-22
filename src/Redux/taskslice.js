import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
    //   console.log(nanoid());
    //   console.log(action.payload);
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
    //   console.log(action.payload.id);
    //   console.log(state);
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;