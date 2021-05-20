import { LocalStorage } from ".";
import refreshToken from "../refreshToken";
import saveToken from "./saveToken";

export default async () => {
  const authToken = LocalStorage.getItem("authToken") || "{}";
  const { access_token, expired, created_at, refresh_token } =
    JSON.parse(authToken);

  if (new Date() > expired) {
    const refreshedToken = await refreshToken(refresh_token);
    saveToken(
      refreshedToken.access_token,
      refreshedToken.expired,
      refreshedToken.refresh_token
    );
    return refreshedToken.access_token;
  } else {
    return access_token;
  }
};
