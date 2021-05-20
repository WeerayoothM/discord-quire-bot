import axios from "axios";
import Qs from "qs";

export const getNewAccessToken = async () => {
  try {
    const res = await axios.post(
      `${process.env.TOKEN_URL}`,
      Qs.stringify({
        grant_type: "refresh_token",
        refresh_token: process.env.REFRESH_TOKEN,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

// curl -H 'Authorization: Bearer dqpa4u4020jxmaloj235lodeytnwqdkf4f4oar' \
// https://quire.io/api/user/id/me
