export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface OAuthReq {
  code: string;
}

export interface PostSignInReq {
  email: string;
  password: string;
}
export type PostSignInRes = AuthTokens;

export type PostKakaoOAuthReq = OAuthReq;
export type PostKakaoOAuthRes = AuthTokens;

export type PostSignUpReq = {
  email: string;
  password: string;
  nickname: string;
};
export type PostSignUpRes = null;
