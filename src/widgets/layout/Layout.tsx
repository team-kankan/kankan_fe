import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header/Header";
import { Container } from "@/shared/ui/container";
import Footer from "../footer/Footer";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="pt-14 flex-1 flex">
        <Container className="py-6 flex-1 ">
          <Outlet />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
