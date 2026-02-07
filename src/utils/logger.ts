import winston from "winston";
import { env } from "../interface/env.ts";
import { enviroment } from "../interface/enums/environment.ts";

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
});

if (env.NODE_ENV !== enviroment.PRODUCTION) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}