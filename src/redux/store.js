import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import pcBuilderReducer from "./features/pcBuilder";

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

const RootState = store.getState();
const AppDispatch = store.dispatch;

module.exports = { RootState, AppDispatch, store };
