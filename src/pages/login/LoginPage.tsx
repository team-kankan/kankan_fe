import Button from "@/shared/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm rounded-lg border p-6 space-y-4">
        <h1 className="text-xl font-semibold text-center">로그인</h1>

        <Button className="w-full">로그인</Button>
      </div>
    </div>
  );
}
