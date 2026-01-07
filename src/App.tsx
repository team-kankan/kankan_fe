import { RouterProvider } from "react-router-dom";
import { AppProviders } from "@/app/providers/providers";
import { useGetProfileQuery } from "@/shared/api/userApi";
import { router } from "./app/providers/router";
import { Toaster } from "sonner";

export default function App() {
  const { data, isLoading } = useGetProfileQuery();

  console.log("api 모킹 테스트:", data);

  if (isLoading) return <div>로딩중</div>;

  return (
    <>
      <Toaster position="top-center" />
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </>
  );
}
