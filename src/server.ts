import { app } from "./app.ts";
import { env } from "./env.ts";

app.listen({ port: env.PORT }, () => {
  console.log("Server running!");
})