import { createSlice } from "@reduxjs/toolkit";

const installationSlice = createSlice({
  name: "installation",
  initialState: {
    records: [],
  },
  reducers: {
    addInstallation: (state, action) => {
      state.records.push(action.payload);
      localStorage.setItem("installations", JSON.stringify(state.records));
    },
    loadInstallations: (state) => {
      const data = JSON.parse(localStorage.getItem("installations")) || [];
      state.records = data;
    },
  },
});

export const { addInstallation, loadInstallations } = installationSlice.actions;
export default installationSlice.reducer;
