import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    message: "No value",
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      state.message = "Incrementing.....";
    },
    decrement: (state) => {
      state.value = state.value - 1;
      state.message = "Decrementing.....";
    },
    reset: (state) => {
      state.value = 0;
      state.message = "Reset Done";
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
