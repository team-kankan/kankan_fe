import { Github } from "lucide-react";

export default function GithubButton() {
  return (
    <a
      href="https://github.com/aaaz425"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-foreground"
    >
      <Github className="h-5 w-5" />
    </a>
  );
}
