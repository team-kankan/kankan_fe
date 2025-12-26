import { useGetProfileQuery } from "./shared/api/userApi";

function App() {
  const { data, isLoading } = useGetProfileQuery();

  console.log("api 모킹 테스트:", data);
  console.log("vercel build test");

  if (isLoading) return <div>로딩중</div>;

  return (
    <>
      <h1>test</h1>
      <div>닉네임: {data?.nickname}</div>
      <div>이메일: {data?.email}</div>
    </>
  );
}

export default App;
