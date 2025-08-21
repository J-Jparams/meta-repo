import "server-only";
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  // Add real secrets later (no NEXT_PUBLIC_* here)
  // SLACK_WEBHOOK_URL: z.string().url().optional(),
  // DISCORD_WEBHOOK_URL: z.string().url().optional(),
});

export const env = schema.parse({
  NODE_ENV: process.env.NODE_ENV,
  // SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
  // DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
});
