import type { FastifyInstance } from "fastify";
import { userRoutes } from "./user.route.ts";

export function registerRoutes(app: FastifyInstance) {
  app.register(userRoutes, { prefix: "/user"});
}