import z from "zod"

export type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  createdAt: Date,
  updatedAt: Date,
}

export const userSchema = z.object({
  id: z.uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})