import dotenv from 'dotenv';


dotenv.config();
import { response } from "express";
import pg from "pg";
const db=new pg.Client({
    user:process.env.PG_user,
    hostname:process.env.PG_hostname,
    password:process.env.PG_password,
    database:process.env.PG_database,
    port:process.env.PG_port
    
});
db.connect();


export default db;