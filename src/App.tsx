import { RouterProvider } from "react-router-dom";
import { AppProviders } from "@/app/providers/providers";
import { useGetProfileQuery } from "@/shared/api/userApi";
import router from "./app/providers/router";
import ToasterWidget from "./widgets/ToasterWidget";

export default function App() {
  const { data } = useGetProfileQuery();

  console.log("api 모킹 테스트:", data);

  return (
    <>
      <ToasterWidget />
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </>
  );
}
