import * as dotenv from "dotenv";
import Discord from "discord.js";
import express from "express";
import { addTaskToBacklog, addTaskToSublist } from "./quire/addTask";

dotenv.config();

const client = new Discord.Client();
const app = express();

app.get("/callback", (req, res) => {
  res.send("Hello, I,m discord bot");
});

app.listen(process.env.PORT, () => {
  console.log(`The application is listening on port ${process.env.PORT}`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on("message", (msg) => {
  const [type, taskName] = msg.content.split(":");
  switch (type) {
    case "addtask":
      addTaskToBacklog("Test_Discord_Bot", taskName);
      msg.reply("task added");
      return;

    case "addtasktosublist":
      addTaskToSublist("Test_Discord_Bot", taskName);
      msg.reply("task added to product sublist");
      return;
  }
});

client.login(process.env.DISCORD_AUTH_TOKEN);
