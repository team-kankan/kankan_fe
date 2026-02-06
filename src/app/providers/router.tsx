import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "@/widgets/layout/Layout";
import MyPage from "@/pages/myPage/MyPage";
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/login/LoginPage";
import { ROUTES } from "@/shared/const/routes";
import GuestOnly from "@/shared/lib/router/guestOnly";
import authLoader from "@/shared/lib/router/authLoader";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <HomePage />,
      },
      {
        path: ROUTES.AUTH.LOG_IN,
        element: (
          <GuestOnly>
            <LoginPage />
          </GuestOnly>
        ),
      },
      {
        path: ROUTES.MY_PAGE,
        loader: authLoader,
        element: <MyPage />,
      },
      {
        path: "*",
        element: <Navigate to={ROUTES.ROOT} replace />,
      },
    ],
  },
]);

export default router;
