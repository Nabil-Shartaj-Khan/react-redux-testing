import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counter/counterSlice"; // Correct the import path

export default configureStore({
  reducer: {
    counter: counterReducer, // Corrected the reducer name
  },
});
