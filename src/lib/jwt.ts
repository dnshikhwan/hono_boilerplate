import { sign, verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import { env } from "../config/env";

export class JWTService {
  static generateAccessToken(payload: JWTPayload): Promise<string> {
    return sign(payload, env.JWT_SECRET);
  }

  static verifyAccessToken(token: string): Promise<JWTPayload> {
    return verify(token, env.JWT_SECRET);
  }
}
