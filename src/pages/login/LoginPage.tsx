import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "@/shared/api/authApi";
import { ROUTES } from "@/shared/const/routes";

import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import Button from "@/shared/ui/button";
import KaKaoButton from "@/shared/ui/KakaoButton";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    setErrorMessage("");

    try {
      await signIn({ email, password }).unwrap();
      navigate(ROUTES.ROOT, { replace: true });
    } catch {
      setErrorMessage("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleKakaoLogin = () => {
    toast.info("카카오 로그인은 현재 지원되지 않습니다.");
  };

  return (
    <div className="h-full flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">로그인</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력하세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="text-sm text-destructive min-h-5">{errorMessage}</p>

            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full" disabled={isLoading}>
                로그인
              </Button>
              <KaKaoButton onClick={handleKakaoLogin} isLoading={isLoading} />
            </div>
            <div className="text-right">
              <Link
                to={ROUTES.AUTH.SIGN_UP}
                className="text-sm text-muted-foreground underline underline-offset-4 hover:opacity-80"
              >
                아직 계정이 없나요? 회원가입
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
