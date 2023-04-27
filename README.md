# notion-backup-service

This is a Node.js script that uses the Notion API to backup a specified database to a local file.

## Installation

```shell
pnpm i
```

Create a .env file in the root directory of the project with the following variables:

```shell
AUTH_KEY=<your Notion API key>
DATABASE_ID=<ID of the database to backup>
```

`AUTH_KEY`: Your Notion API key. Create yours in <https://www.notion.so/my-integrations>

`DATABASE_ID`: The ID of the database to backup. <https://stackoverflow.com/a/73083935>

## Run

Run `pnpm dev` to execute the script in watch mode or run `pnpm start` after `pnpm build`.
The script will create a backup file in the "backups" directory with the current date time as the file name.

### Dependencies

* swc
* axios
* dotenv
* fs
* moment
* zod
