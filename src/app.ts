import Discord from "discord.js";
import * as dotenv from "dotenv";
import { addTaskToBacklog } from "./quire/addtask";
import getToken from "./quire/auth/function/local/getToken";
// import "./quire/auth/route/index";

dotenv.config();

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on("message", async (msg) => {
  const { content } = msg;

  if (content.includes("/addtask")) {
    const message = content.split("/addtask")[1];
    addTaskToBacklog("Test_Discord_Bot", message); //! Change "Test_Discord_Bot" to another projectId
    msg.reply(`adding ${message} to quire.io`);
  }
});

const test = async () => {
  const token = await getToken();
  console.log("token", token);
};

console.log(test());

client.login(process.env.DISCORD_APP_TOKEN);
