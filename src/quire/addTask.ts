import axios from "axios";
import getToken from "./auth/function/local/getToken";

export const addTaskToBacklog = async (projectId: string, name: string) => {
  const Authorization = `bearer ${await getToken()}`;
  console.log(Authorization);

  try {
    const res = await axios.post(
      `${process.env.QUIRE_API_URL}/task/id/${projectId}`,
      {
        name,
      },
      {
        headers: {
          Authorization: `bearer ${await getToken()}`, // or token.access_token
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
