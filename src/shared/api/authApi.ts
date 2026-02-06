import type {
  PostKakaoOAuthReq,
  PostKakaoOAuthRes,
  PostSignInReq,
  PostSignInRes,
} from "@/entities/auth/model/types";
import { baseApi } from "./baseApi";
import { TAG_TYPES } from "./tags/types";
import { tokenStorage } from "../lib/token/tokenStorage";
import { AUTH_ENDPOINTS } from "./endpoints";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Memo: 일반 로그인
    signIn: builder.mutation<PostSignInRes, PostSignInReq>({
      query: (body) => ({
        url: AUTH_ENDPOINTS.SIGN_IN,
        method: "POST",
        body,
      }),

      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        tokenStorage.set(data);
      },

      invalidatesTags: [TAG_TYPES.AUTH],
    }),

    // Memo: 카카오 OAuth 로그인
    kakaoSignIn: builder.mutation<PostKakaoOAuthRes, PostKakaoOAuthReq>({
      query: (body) => ({
        url: AUTH_ENDPOINTS.KAKAO_OAUTH,
        method: "POST",
        body,
      }),

      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        tokenStorage.set(data);
      },

      invalidatesTags: [TAG_TYPES.AUTH],
    }),

    // Memo: 로그아웃
    logout: builder.mutation<void, void>({
      query: () => ({
        url: AUTH_ENDPOINTS.SIGN_OUT,
        method: "POST",
      }),

      async onQueryStarted(_, { queryFulfilled }) {
        await queryFulfilled;
        tokenStorage.clear();
      },

      invalidatesTags: [TAG_TYPES.AUTH],
    }),
  }),
});

export const { useSignInMutation, useKakaoSignInMutation, useLogoutMutation } = authApi;
