import { verify } from "jsonwebtoken";

export const APP_SECRET = "appsecret321";

export function getUserId(request) {
  const Authorization = request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, APP_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
}
