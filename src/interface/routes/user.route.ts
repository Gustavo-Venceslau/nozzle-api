import type { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/user/create-user-controller.ts";

const createUserController = new CreateUserController();

export async function userRoutes(fastify: FastifyInstance) {
  fastify.post("/", createUserController.handle)
}