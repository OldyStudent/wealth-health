import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

const employeeActions = employeeSlice.actions;
const employeeReducer = employeeSlice.reducer;

export { employeeActions, employeeReducer };
