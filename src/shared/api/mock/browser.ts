import { setupWorker } from "msw/browser";
import { userHandlers } from "./handlers/user";
import { authHandlers } from "./handlers/auth";

export const worker = setupWorker(...authHandlers, ...userHandlers);
