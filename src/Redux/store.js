import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskslice.js'
export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});