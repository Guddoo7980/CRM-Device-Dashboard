import { createSlice } from "@reduxjs/toolkit";

const devicesSlice = createSlice({
  name: "devices",
  initialState: {
    list: [
      {
        id: "MD-001",
        type: "X-Ray",
        facility: "Hospital A",
        status: "Online",
        battery: 95,
        lastService: "2025-07-01",
        contractStatus: "AMC Active",
      },
    ],
  },
  reducers: {
    addDevice: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addDevice } = devicesSlice.actions;
export default devicesSlice.reducer;
