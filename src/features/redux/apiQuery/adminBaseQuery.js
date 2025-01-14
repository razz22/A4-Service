import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminSliceApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_ADMIN_API_URL}`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().adminAuthSlice.token; // Retrieve token from Redux state
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
