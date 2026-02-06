import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAG_TYPES } from "./tags";
import { tokenStorage } from "../lib/token/tokenStorage";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL ?? "",
    prepareHeaders: (headers) => {
      const accessToken = tokenStorage.getAccessToken();

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),

  tagTypes: Object.values(TAG_TYPES),
  endpoints: () => ({}),
});
