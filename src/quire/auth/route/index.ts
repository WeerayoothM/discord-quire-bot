import express from "express";
import refreshToken from "../function/refreshToken";
import exchangeToken from "../function/exchangeToken";
import saveToken from "../function/local/saveToken";
import getToken from "../function/local/getToken";

const app = express();

app.get("/quire/callback", async (req, res) => {
  const { code, host } = req.query;
  const result = await exchangeToken(code);
  // access_token: string,
  // expired: number,
  // refresh_token: string
  const { access_token, expired, refresh_token } = result;
  await saveToken(access_token, expired, refresh_token);
  const token = await getToken();
  console.log(token);

  res.send(result);
});

app.get("/quire/auth", (req, res) => {
  res.redirect(
    `https://quire.io/oauth?client_id=${process.env.CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fquire%2Fcallback`
  );
});

app.listen(8080, () => {
  console.log("server is started on port 8080");
});
