import { Navigate } from "react-router-dom";
import { ROUTES } from "@/shared/const/routes";
import { tokenStorage } from "../token/tokenStorage";

export default function GuestOnly({ children }: { children: React.ReactNode }) {
  const isAuth = !!tokenStorage.getAccessToken();

  if (isAuth) {
    return <Navigate to={ROUTES.MY_PAGE} replace />;
  }

  return children;
}
