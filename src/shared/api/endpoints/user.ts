export const USER_ENDPOINTS = {
  SIGN_UP: "/users",
  PROFILE: "/users",
  UPDATE_NICKNAME: "/users/nickname",
  WITHDRAW: "/users",
  SIGN_IN: "/auth/sign-in",
  SIGN_OUT: "/auth/sign-out",
  KAKAO_OAUTH: "/auth/oauth/kakao/sign-in",
  // TODO: 삭제 예정
  EXAMPLE: (userId: number) => `/members/${userId}`,
} as const;
