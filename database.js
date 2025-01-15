import dotenv from 'dotenv';


dotenv.config();
import { response } from "express";
import pg from "pg";
const db=new pg.Client({
    user:"postgres",
    hostname:"localhost",
    password:process.env.database_pass,
    database:"eshop",
    port:5432
});
db.connect();


export default db;