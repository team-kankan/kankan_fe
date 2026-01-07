import GithubButton from "./GIthubButton";
import MailButton from "./MailButton";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <p>© 2026 KanKan. All rights reserved.</p>
          <p>오늘의 기록이 내일의 합격이 됩니다.</p>
          <div className="flex gap-4 text-muted-foreground">
            <GithubButton />
            <MailButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
