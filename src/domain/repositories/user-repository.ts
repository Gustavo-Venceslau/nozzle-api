import type { CreateUserRequest } from "../../interface/types/user/create-user/create-user.ts";
import type { User } from "../entities/user.ts";

export interface IUserRepository {
  createUser(user: CreateUserRequest): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}