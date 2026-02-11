import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/const/routes";
import { useLazyGetCheckEmailDuplicateQuery, usePostSignUpMutation } from "@/shared/api/userApi";

import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import Button from "@/shared/ui/button";
import { toast } from "sonner";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [postSignUp, { isLoading: isSignUpLoading }] = usePostSignUpMutation();
  const [triggerCheckEmail, { isFetching: isCheckEmailLoading }] =
    useLazyGetCheckEmailDuplicateQuery();

  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isEmailDuplicate, setIsEmailDuplicate] = useState<boolean | null>(null);

  const isLoading = isSignUpLoading || isCheckEmailLoading;

  const isPasswordMismatch = useMemo(() => {
    if (!password || !passwordConfirm) return false;
    return password !== passwordConfirm;
  }, [password, passwordConfirm]);

  const handleChangeEmail = (value: string) => {
    setEmail(value);
    setIsEmailChecked(false);
    setIsEmailDuplicate(null);
  };

  const handleCheckEmail = async () => {
    setErrorMessage("");

    if (!email) {
      setErrorMessage("이메일을 입력해주세요.");
      return;
    }

    try {
      const isDuplicate = await triggerCheckEmail(email).unwrap();

      setIsEmailChecked(true);
      setIsEmailDuplicate(isDuplicate);

      if (isDuplicate) {
        setErrorMessage("이미 사용 중인 이메일입니다.");
        return;
      }

      toast.success("사용 가능한 이메일입니다.");
    } catch (err) {
      const e = err as { data?: { message?: string } };
      setErrorMessage(e.data?.message ?? "이메일 확인에 실패했습니다.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) return;

    setErrorMessage("");

    if (!isEmailChecked) {
      setErrorMessage("이메일 중복 확인을 해주세요.");
      return;
    }

    if (isEmailDuplicate) {
      setErrorMessage("이미 사용 중인 이메일입니다.");
      return;
    }

    if (isPasswordMismatch) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      setPasswordConfirm("");
      passwordConfirmRef.current?.focus();
      return;
    }

    try {
      await postSignUp({ email, nickname, password }).unwrap();

      toast.success("회원가입이 완료되었습니다.");

      navigate(ROUTES.AUTH.LOG_IN, { replace: true });
    } catch (err) {
      const e = err as { data?: { message?: string } };
      setErrorMessage(e.data?.message ?? "회원가입에 실패했습니다.");

      setPassword("");
      setPasswordConfirm("");
      passwordRef.current?.focus();
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">회원가입</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">이메일</Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  value={email}
                  onChange={(e) => handleChangeEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
                <Button type="button" onClick={handleCheckEmail} disabled={isLoading || !email}>
                  중복 확인
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="nickname">닉네임</Label>
              <Input
                id="nickname"
                placeholder="닉네임을 입력해주세요."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-col gap-3">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
                <Input
                  ref={passwordConfirmRef}
                  id="passwordConfirm"
                  type="password"
                  placeholder="비밀번호를 다시 한 번 입력해주세요."
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <p className="text-sm text-destructive min-h-5">{errorMessage}</p>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || isPasswordMismatch || !isEmailChecked || !!isEmailDuplicate}
            >
              회원가입
            </Button>

            <div className="text-right">
              <Link
                to={ROUTES.AUTH.LOG_IN}
                className="text-sm text-muted-foreground underline underline-offset-4 hover:opacity-80"
              >
                이미 계정이 있나요? 로그인
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
