import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import moment from "moment";
import path from "path";
import { z } from "zod";

dotenv.config();

const envVariables = z.object({
  AUTH_KEY: z.string(),
  DATABASE_ID: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

const client = axios.create({
  baseURL: "https://api.notion.com",
  headers: {
    "Notion-Version": "2022-06-28",
    Authorization: `Bearer ${process.env.AUTH_KEY}`,
  },
});

client.post(`/v1/databases/${process.env.DATABASE_ID}/query`).then((res) => {
  const outputPath = `backups/${moment().format("YYYY-MM-DDTHH:mm")}.txt`;
  fs.writeFile(outputPath, JSON.stringify(res.data), (err) => {
    if (err) throw err;
    const absPath = path.resolve(`./${outputPath}`);
    console.log(`Backup Success!`);
    console.log(`Path: ${absPath}`);
  });
});
