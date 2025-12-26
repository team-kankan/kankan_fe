export const mockUserProfile = (nickname?: string) => {
  return {
    id: 1,
    nickname: nickname ?? "mock-user",
    email: "mock@test.com",
  };
};
