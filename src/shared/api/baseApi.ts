import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAG_TYPES } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // Todo: baseUrl 환경변수화
    baseUrl: "",
    // prepareHeaders: (headers, { getState }) => {
    prepareHeaders: (headers) => {
      // Todo: 토큰 공통 처리
      return headers;
    },
  }),
  // Todo: 태그타입 상수화
  tagTypes: [TAG_TYPES.PROFILE, "Posting", "Resume", "CoverLetter", "Notification", "Company"],
  endpoints: () => ({}),
});
