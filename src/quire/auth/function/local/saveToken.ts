import { LocalStorage } from ".";

export default (
  access_token: string,
  expired: number,
  refresh_token: string
) => {
  LocalStorage.setItem(
    "authToken",
    JSON.stringify({
      access_token,
      expired: new Date(Date.now() + expired),
      created_at: new Date(),
      refresh_token,
    })
  );
};
