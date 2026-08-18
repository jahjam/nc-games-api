import { Pool } from "pg";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const ENV = process.env.NODE_ENV || "dev";

console.log(ENV);

dotenv.config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.PGDATABASE && !process.env.DB_URL) {
  throw new Error("PGDATABASE not set");
}

const config =
  ENV === "prod"
    ? {
        connectionString: process.env.DB_URL,
        max: 2,
      }
    : {};

const pool = new Pool(config);

export default pool;
