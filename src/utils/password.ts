import bycrypt from "bcrypt";

const SALT_ROUNDS = 10;

/**
 * get the password and return a string with a hash based on the password.
 * @param password
 */
export async function hashPassword(password: string): Promise<string> {
  return bycrypt.hash(password, SALT_ROUNDS);
}

/**
 * compare the password with the hash stored in the database.
 * @param password
 * @param hash
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bycrypt.compare(password, hash);
}