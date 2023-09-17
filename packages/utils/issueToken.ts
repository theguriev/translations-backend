import { sign, JwtPayload } from "jsonwebtoken";

export const issueToken = (
  payload: JwtPayload,
  { secret, expiresIn = "15m" }: { secret: string; expiresIn?: string }
) => {
  sign(payload, secret, {
    expiresIn,
  });
};
