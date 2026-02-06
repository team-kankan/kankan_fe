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
];
