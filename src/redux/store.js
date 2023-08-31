import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import pcBuilderReducer from "./features/pcBuilder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});


