export const USER_ENDPOINTS = {
  SIGN_UP: "/users",
  PROFILE: "/users",
  UPDATE_NICKNAME: "/users/nickname",
  WITHDRAW: "/users",
  CHECK_EMAIL: "/users/check-email",
  // TODO: 삭제 예정
  EXAMPLE: (userId: number) => `/members/${userId}`,
} as const;
