import { TAG_TYPES } from "./types";

export const userTag = {
  profile: () => ({ type: TAG_TYPES.PROFILE }),
  // Todo: 삭제 에정
  example: (id: number) => ({ type: TAG_TYPES.PROFILE, id }),
};
