import type { UpdateNicknameReq, User } from "@/entities/user";
import { baseApi } from "./baseApi";
import { USER_ENDPOINTS } from "./endpoints";
import { userTag } from "./tags";
import type { ApiResponse } from "@/entities/types";
import type { PostSignUpReq } from "@/entities/auth/model/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Memo: 사용자 프로필 조회
    getProfile: builder.query<User, void>({
      query: () => USER_ENDPOINTS.PROFILE,
      transformResponse: (response: ApiResponse<User>) => response.data,
      providesTags: () => [userTag.profile()],
    }),

    // Memo: 닉네임 수정
    updateNickname: builder.mutation<User, UpdateNicknameReq>({
      query: (body) => ({
        url: USER_ENDPOINTS.UPDATE_NICKNAME,
        method: "PUT",
        body,
      }),
      transformResponse: (response: ApiResponse<User>) => response.data,
      invalidatesTags: () => [userTag.profile()],
    }),

    // Memo: 회원가입
    postSignUp: builder.mutation<void, PostSignUpReq>({
      query: (body) => ({
        url: USER_ENDPOINTS.SIGN_UP,
        method: "POST",
        body,
      }),
    }),

    // Memo: 이메일 중복 체크
    getCheckEmailDuplicate: builder.query<boolean, string>({
      query: (email) => ({
        url: USER_ENDPOINTS.CHECK_EMAIL,
        method: "GET",
        params: { email },
      }),
      transformResponse: (response: ApiResponse<{ isDuplicate: boolean }>) =>
        response.data.isDuplicate,
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateNicknameMutation,
  usePostSignUpMutation,
  useLazyGetCheckEmailDuplicateQuery,
} = userApi;
