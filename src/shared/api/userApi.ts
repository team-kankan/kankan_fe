import type { UpdateNicknameReq, User } from "@/entities/user";
import { baseApi } from "./baseApi";
import { USER_ENDPOINTS } from "./endpoints";
import { userTag } from "./tags";
import type { ApiResponse } from "@/entities/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => USER_ENDPOINTS.PROFILE,
      transformResponse: (response: ApiResponse<User>) => response.data,
      providesTags: () => [userTag.profile()],
    }),

    updateNickname: builder.mutation<User, UpdateNicknameReq>({
      query: (body) => ({
        url: USER_ENDPOINTS.UPDATE_NICKNAME,
        method: "PUT",
        body,
      }),
      transformResponse: (response: ApiResponse<User>) => response.data,
      invalidatesTags: () => [userTag.profile()],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateNicknameMutation } = userApi;
