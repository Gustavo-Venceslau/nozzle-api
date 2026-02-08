import type { CreateUserRequest } from "../../../interface/types/user/create-user/create-user.ts";
import type { User } from "../../../domain/entities/user.ts";
import type { IUserRepository } from "../../../domain/repositories/user-repository.ts";
import { UserRepository } from "../../../interface/repositories/user-repository.ts";
import { logger } from "../../../utils/logger.ts";
import { hashPassword } from "../../../utils/password.ts";

export class CreateUserUseCase {
  private readonly userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }
  async execute(userData: CreateUserRequest): Promise<User> {
  try {
    const userFound = await this.userRepository.findByEmail(userData.email);

    if(userFound) throw new Error("User already exists");

    userData.password = await hashPassword(userData.password);

    const userCreated = await this.userRepository.createUser(userData);

    return userCreated;
  }
  catch(error) {
    const errorMessage = `[CREATE-USER] error to create user: ${error}`;
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }
}
}