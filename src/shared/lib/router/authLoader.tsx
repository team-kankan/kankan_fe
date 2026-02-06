import { redirect } from "react-router-dom";
import { ROUTES } from "@/shared/const/routes";
import { tokenStorage } from "@/shared/lib/token/tokenStorage";

export default function authLoader() {
  const token = tokenStorage.getAccessToken();

  if (!token) {
    throw redirect(ROUTES.AUTH.LOG_IN);
  }

  return null;
}
