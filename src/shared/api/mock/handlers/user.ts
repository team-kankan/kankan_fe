import { http, HttpResponse } from "msw";
import { USER_ENDPOINTS } from "@/shared/api/endpoints";
import { mockUserProfile } from "@/entities/user";

export const userHandlers = [
  http.get(USER_ENDPOINTS.PROFILE, () => {
    return HttpResponse.json({
      message: "정상 처리",
      data: mockUserProfile(),
    });
  }),

  http.put(USER_ENDPOINTS.UPDATE_NICKNAME, async ({ request }) => {
    const body = (await request.json()) as { nickname: string };

    return HttpResponse.json({
      message: "정상 처리",
      data: mockUserProfile(body.nickname),
    });
  }),
];
