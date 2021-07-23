import { Application } from 'https://deno.land/x/abc@v1.3.1/mod.ts';
import { cors } from 'https://deno.land/x/abc@v1.3.1/middleware/cors.ts';
import { Client } from "https://deno.land/x/postgres@v0.11.3/mod.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';
const DENO_ENV = Deno.env.get('DENO_ENV') ?? 'development';
config({ path: `./.env.${DENO_ENV}`, export: true });
console.log(`Deno Enviroment: ${DENO_ENV}`);
const client = new Client(Deno.env.get("PG_URL"));
await client.connect();
const PORT = Number(Deno.env.get("PORT"));

const app = new Application();
const headersWhitelist = ["Authorization", "Content-Type", "Accept", "Origin", "User-Agent"];
app.use(cors({ allowOrigins: [Deno.env.get("ALLOWED_ORIGINS")], allowHeaders: headersWhitelist, allowCredentials: true }));

app
    .get('/myInfo', async server => {
        const myInfo = (await client.queryObject(`
        SELECT id, name, cv_img, description, email, github_link, linkedin_link FROM my_info
      `)).rows
        console.log(myInfo);
        await server.json(myInfo)
    })
    .start({ port: PORT })
console.log(`Server running on http://localhost:${PORT}`);