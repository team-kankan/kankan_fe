export type User = {
  userId: number;
  email: string;
  nickname: string;
};

export interface UpdateNicknameReq {
  nickname: string;
}
