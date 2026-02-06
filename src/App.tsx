import { RouterProvider } from "react-router-dom";
import { AppProviders } from "@/app/providers/providers";
import { useGetProfileQuery } from "@/shared/api/userApi";
import { Toaster } from "sonner";
import router from "./app/providers/router";

export default function App() {
  const { data } = useGetProfileQuery();

  console.log("api 모킹 테스트:", data);

  return (
    <>
      <Toaster position="top-center" />
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </>
  );
}
