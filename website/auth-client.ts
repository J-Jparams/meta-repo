import { createAuthClient } from "better-auth/client";
import type { auth } from "./lib/auth.ts";
import { inferAdditionalFields } from "better-auth/client/plugins";


const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});


export const {} = authClient;