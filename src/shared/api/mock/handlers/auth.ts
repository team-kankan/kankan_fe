import { http, HttpResponse } from "msw";
import { mockAuthTokens } from "@/entities/auth/mock";
import { AUTH_ENDPOINTS } from "../../endpoints";
import { API_BASE_URL } from "../../config";

export const authHandlers = [
  // Memo: 로그인
  http.post(API_BASE_URL + AUTH_ENDPOINTS.SIGN_IN, async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string };

    if (body.email === "test@test.com" && body.password === "1234") {
      return HttpResponse.json({
        message: "로그인 성공",
        data: mockAuthTokens,
      });
    }

    return HttpResponse.json(
      {
        message: "로그인 실패",
      },
      { status: 401 },
    );
  }),

  // Memo: 소셜 로그인
  http.post(API_BASE_URL + AUTH_ENDPOINTS.KAKAO_OAUTH, async ({ request }) => {
    const body = (await request.json()) as { code: string };

    if (body.code) {
      return HttpResponse.json({
        message: "로그인 성공",
        data: mockAuthTokens,
      });
    }

    return HttpResponse.json(
      {
        message: "로그인 실패",
      },
      { status: 401 },
    );
  }),

  // Memo: 로그아웃
  http.post(API_BASE_URL + AUTH_ENDPOINTS.SIGN_OUT, () => {
    return HttpResponse.json({
      message: "정상처리",
    });
  }),
];
