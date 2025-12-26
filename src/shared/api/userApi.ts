import type { UpdateNicknameReq, User } from "@/entities/user";
import { baseApi } from "./baseApi";
import { USER_ENDPOINTS } from "./endpoints";
import { userTag } from "./tags";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => USER_ENDPOINTS.PROFILE,
      providesTags: () => [userTag.profile()],
    }),

    updateNickname: builder.mutation<User, UpdateNicknameReq>({
      query: (body) => ({
        url: USER_ENDPOINTS.UPDATE_NICKNAME,
        method: "PUT",
        body,
      }),
      invalidatesTags: () => [userTag.profile()],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateNicknameMutation } = userApi;
