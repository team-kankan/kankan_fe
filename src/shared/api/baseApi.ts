import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { TAG_TYPES } from "./tags";
import { tokenStorage } from "../lib/token/tokenStorage";
import type { ApiResponse } from "@/entities/types";

type ServerErrorData = {
  message: string;
};

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL ?? "",
  prepareHeaders: (headers) => {
    const accessToken = tokenStorage.getAccessToken();

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithErrorHandling: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const err = result.error as FetchBaseQueryError;
    const data = err.data as ApiResponse<null>;

    return {
      error: {
        ...err,
        data: {
          message: data?.message ?? "요청에 실패했습니다.",
        } satisfies ServerErrorData,
      },
    };
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: Object.values(TAG_TYPES),
  endpoints: () => ({}),
});
