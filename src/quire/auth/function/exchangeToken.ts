import axios from "axios";
import QueryString, { ParsedQs } from "qs";

export default async (
  code: string | ParsedQs | string[] | ParsedQs[] | undefined
) => {
  try {
    if (!code) {
      return {};
    }

    const result = await axios.post(
      `${process.env.AUTHORIZATION_URL}/token`,
      QueryString.stringify({
        grant_type: "authorization_code",
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return { ...result.data };
  } catch (error) {
    console.log(error.message);
  }
};
