import type { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserUseCase } from "../../../application/use-cases/user/create-user.ts";
import type { CreateUserRequest } from "../../types/user/create-user/create-user.ts";
import { createUserSchema } from "../../types/user/create-user/create-user.ts";

export class CreateUserController {
  private readonly createUserUseCase: CreateUserUseCase;

  constructor() {
    this.createUserUseCase = new CreateUserUseCase();
  }

  async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const body = request.body as CreateUserRequest;
      const validatedBody = this.validateRequestBody(body);

      const user = await this.createUserUseCase.execute(validatedBody);

      return reply.status(201).send(user);
    } catch(error) {
      return reply.status(500).send({ message: `${error}`});
    }
  }

  private validateRequestBody(body: CreateUserRequest): CreateUserRequest {
    return createUserSchema.parse(body);
  }
}