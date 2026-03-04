import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(helmet);
  app.register(cors, {
    origin: [
      "https://crslr.app",
      "capacitor://crslr.app",
    ],
    methods: ["GET", "POST", "DELETE"],
  });

  app.get("/health", async () => ({ status: "ok" }));

  return app;
}
