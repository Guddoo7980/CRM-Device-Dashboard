import { configureStore } from "@reduxjs/toolkit";
import devicesReducer from "./slices/devicesSlice";
import visitsReducer from "./slices/visitsSlice";
import contractsReducer from "./slices/contractsSlice";
import installationReducer from "./slices/installationSlice";

export const store = configureStore({
  reducer: {
    devices: devicesReducer,
    visits: visitsReducer,
    contracts: contractsReducer,
    installation: installationReducer,
  },
});
