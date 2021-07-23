import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { Client } from "https://deno.land/x/postgres@v0.11.3/mod.ts"
const DENO_ENV = Deno.env.get('DENO_ENV') ?? 'development'
config({ path: `./.env.${DENO_ENV}`, export: true })
const client = new Client(Deno.env.get("PG_URL"))
await client.connect()

await client.queryArray(`DROP TABLE IF EXISTS my_info;`);

await client.queryObject(
  `CREATE TABLE my_info (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cv_img TEXT NOT NULL,
    description TEXT NOT NULL,
    email TEXT NOT NULL,
    github_link TEXT NOT NULL,
    linkedin_link TEXT NOT NULL
  )`
)