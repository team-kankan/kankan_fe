import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@/shared/api/authApi";
import { ROUTES } from "@/shared/const/routes";
import Button from "@/shared/ui/button";

export default function MyPage() {
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      navigate(ROUTES.ROOT, { replace: true });
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

  return (
    <section className="space-y-4">
      <h1 className="text-muted-foreground">마이 페이지</h1>

      <Button variant="destructive" onClick={handleLogout} disabled={isLoading}>
        로그아웃
      </Button>
    </section>
  );
}
