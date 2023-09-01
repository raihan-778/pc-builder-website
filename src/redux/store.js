import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { api } from "./api/apiSlice";
import pcBuilderReducer from "./features/pcBuilder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    pcBuilderCart: pcBuilderReducer,
    [api.reducerPath]: api.reducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const wrapper= createWrapper(store)
