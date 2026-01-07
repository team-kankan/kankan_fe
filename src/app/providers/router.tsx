import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/widgets/layout/Layout";
import MyPage from "@/pages/myPage/MyPage";
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/login/LoginPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/myPage",
        element: <MyPage />,
      },
    ],
  },
]);
