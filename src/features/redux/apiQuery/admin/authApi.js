import { adminSliceApi } from "../adminBaseQuery";

export const authApi = adminSliceApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (payload) => ({
        url: `auth/login`,
        method: "POST",
        body: JSON.stringify(payload),
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
