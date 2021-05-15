import axios from "axios";

export const addTaskToBacklog = async (
  projectId: string,
  name: string
  //   status:number,
  //   asUser:boolean,
  //   priority:number
) => {
  try {
    const res = await axios.post(
      `${process.env.QUIRE_API_URL}/task/id/${projectId}`,
      {
        name,
        priority: 2,
      },
      {
        headers: {
          Authorization: `${process.env.TOKEN_TYPE} ${process.env.ACCESS_TOKEN}`,
        },
      }
    );
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//* list data
// {
//     "archived": true,
//     "changes": [
//       {
//         "task": "2MmYOpJH_ZLeehIjjytH1Rwr",
//         "exclude": false,
//         "single": false
//       }
//     ],
//     "description": "**Great** sublist to start with.",
//     "name": "Sublist 101",
//     "id": "Sublist101",
//     "due": "2020-01-22T02:06:58.158Z",
//     "image": "icon-view-kanban",
//     "iconColor": "37"
//   }
export const addTaskToSublist = async (
  projectId: string,
  name: string
  //   status:number,
  //   asUser:boolean,
  //   priority:number
) => {
  try {
    const sublist = await axios.put(
      `${process.env.QUIRE_API_URL}/sublist/id/${projectId}/Product`,
      {
        archived: false,
        changes: [
          {
            task: name,
            exclude: true,
            single: true,
          },
        ],
        name: "Product",
        id: "Product",
      },
      {
        headers: {
          Authorization: `${process.env.TOKEN_TYPE} ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    return sublist;
  } catch (error) {
    console.log(error);
  }
};
