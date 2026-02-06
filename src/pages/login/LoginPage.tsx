import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "@/shared/api/authApi";
import { ROUTES } from "@/shared/const/routes";

import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import Button from "@/shared/ui/button";

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
                placeholder="test@test.com"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="text-sm text-destructive min-h-5">{errorMessage}</p>

            <Button type="submit" className="w-full" disabled={isLoading}>
              로그인
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
