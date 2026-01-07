import { Container } from "@/shared/ui/container";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b bg-background/80 backdrop:blur">
      <Container className="flex h-full items-center justify-between">
        <HeaderNav />
      </Container>
    </header>
  );
}
