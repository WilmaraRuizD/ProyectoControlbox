import { createPool } from "mysql2/promise";
import * as dotenv from 'dotenv';
dotenv.config();

export const pool=createPool({


  host:process.env.HOST || "localhost",
  user:process.env.USER|| "root",
  password:process.env.PASSWORD|| "",
  database: process.env.database|| "",
  puerto:process.env.PORT

})


