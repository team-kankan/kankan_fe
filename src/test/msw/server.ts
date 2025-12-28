import { userHandlers } from "@/shared/api/mock/handlers/user";
import { setupServer } from "msw/node";

export const server = setupServer(...userHandlers);
