import { Hono } from "hono";

const healthApp = new Hono();

healthApp.get("/", async (c) => {
  try {
    // try database connection
    // await prisma.$querRaw`SELECT 1`

    return c.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: Bun.nanoseconds(),
      database: "connected",
    });
  } catch (error) {
    return c.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        uptime: Bun.nanoseconds(),
        database: "disconnected",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      503
    );
  }
});

export default healthApp;
