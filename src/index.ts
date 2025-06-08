import { Hono } from "hono";
import { logger } from "hono/logger";
import { env } from "./config/env";
import healthApp from "./routes/health";

const app = new Hono().basePath(`/api/v${env.VERSION}`);

app.use(logger());

// routes
app.route("/health", healthApp);

// root endpoint
app.get("/", (c) => {
  return c.json({
    name: env.APP_NAME,
    version: env.VERSION,
    status: "running",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.notFound((c) => {
  return c.json(
    {
      success: false,
      error: {
        message: "Not found",
        path: c.req.path,
      },
      timestamp: new Date().toISOString(),
    },
    404
  );
});

// start server
Bun.serve({
  port: env.PORT,
  fetch: app.fetch,
});

console.log(`🚀 Server starting on port ${env.PORT}`);
