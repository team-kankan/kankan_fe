import { Mail } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "ytokogg@gmail.com";

export default function MailButton() {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    toast.success("이메일 주소가 복사되었습니다");
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-muted-foreground hover:text-foreground cursor-pointer"
      aria-label="이메일 주소 복사"
    >
      <Mail className="h-5 w-5" />
    </button>
  );
}
