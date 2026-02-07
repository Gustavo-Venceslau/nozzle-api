import type { User } from "../../domain/entities/user.ts";
import type{ IUserRepository } from "../../domain/repositories/user-repository.ts";
import { prisma } from "../lib/prismaClient.ts";
import type { CreateUserRequest } from "../types/user/create-user/create-user.ts";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const userFound = await prisma.user.findFirst({ where: { email }});

    return userFound;
  }

  async createUser(user: CreateUserRequest): Promise<User> {
    const userCreated = await prisma.user.create({ data: user });

    return userCreated;
  }
}