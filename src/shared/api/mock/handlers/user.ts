import { http, HttpResponse } from "msw";
import { USER_ENDPOINTS } from "@/shared/api/endpoints";
import { mockUserProfile } from "@/entities/user";
import { API_BASE_URL } from "../../config";

export const userHandlers = [
  // Memo: 사용자 프로필 조회
  http.get(API_BASE_URL + USER_ENDPOINTS.PROFILE, () => {
    return HttpResponse.json({
      message: "정상 처리",
      data: mockUserProfile(),
    });
  }),

  // Memo: 닉네임 수정
  http.put(API_BASE_URL + USER_ENDPOINTS.UPDATE_NICKNAME, async ({ request }) => {
    const body = (await request.json()) as { nickname: string };

    return HttpResponse.json({
      message: "정상 처리",
      data: mockUserProfile(body.nickname),
    });
  }),

  // Memo: 회원가입
  http.post(API_BASE_URL + USER_ENDPOINTS.SIGN_UP, async ({ request }) => {
    const body = (await request.json()) as {
      email: string;
      nickname: string;
      password: string;
    };

    if (!body.email || !body.nickname || !body.password) {
      return HttpResponse.json(
        {
          message: "필수 값 누락",
          data: null,
        },
        { status: 400 },
      );
    }

    if (["test@test.com", "duplicate@test.com"].includes(body.email)) {
      return HttpResponse.json(
        {
          message: "이미 가입된 이메일입니다.",
          data: null,
        },
        { status: 409 },
      );
    }

    return HttpResponse.json(
      {
        message: "회원가입 성공",
        data: null,
      },
      { status: 201 },
    );
  }),

  // Memo: 이메일 중복 체크
  http.get(API_BASE_URL + USER_ENDPOINTS.CHECK_EMAIL, ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return HttpResponse.json({ message: "이메일이 필요합니다." }, { status: 400 });
    }

    const duplicateEmails = ["test@test.com", "duplicate@test.com"];
    const isDuplicate = duplicateEmails.includes(email);

    return HttpResponse.json({
      message: "정상 처리",
      data: {
        isDuplicate,
      },
    });
  }),
];
