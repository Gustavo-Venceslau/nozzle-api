import z from "zod"

export type CreateUserRequest = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
})