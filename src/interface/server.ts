import { app } from "./app.ts";
import { env } from "./env.ts";

app.listen({ port: env.PORT }, () => {
  console.log(`Server is running on port ${env.PORT}`);
})