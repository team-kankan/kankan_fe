import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/global.css";
import App from "./App";
import { AppProviders } from "./app/providers";

async function start() {
  const { worker } = await import("./shared/api/mock/browser");

  await worker.start({
    onUnhandledRequest: "bypass",
  });

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </StrictMode>,
  );
}

start();
