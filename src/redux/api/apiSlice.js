// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pc-builder-server-lilac.vercel.app/" }),
  endpoints: (builder) => ({
    getAllComponents: builder.query({
      query: () => "/products",
    }),
  }),
});


export const { useGetAllComponentsQuery } = api