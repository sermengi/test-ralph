import { describe, it, expect } from "vitest";
import { buildApp } from "./app.js";

describe("App", () => {
  it("GET /health returns ok", async () => {
    const app = buildApp();
    const res = await app.inject({ method: "GET", url: "/health" });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ status: "ok" });
  });
});
