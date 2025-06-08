import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "staging", "production"])
    .default("development"),
  PORT: z.string().transform(Number).default("3000"),
  VERSION: z.string().default("1.0.0"),
  APP_NAME: z.string().default("myapp"),
  JWT_SECRET: z.string().min(32).default("secret"),
});

export const env = envSchema.parse(process.env);
