import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({
  origin:'https://lokhesh1.github.io/frontend-1',credentials:true
}));
app.use(cookieParser());
app.use(session({
  secret:'sceret',
  resave:false,
  saveUninitialized:false,
  cookie:{
    secure:false,
    maxAge:1000*60*24*24
  }
}))
app.get('/watches',async(req,res)=>{
  const products =await JSON.parse(fs.readFileSync(path.join(__dirname, 'product.json'), 'utf-8'));
  res.json(products);
});
app.get('/perfumes',async(req,res)=>{
  const products =await JSON.parse(fs.readFileSync(path.join(__dirname, 'product.json'), 'utf-8'));
  res.json(products);
});
app.get('/clothing',async(req,res)=>{
  const products =await JSON.parse(fs.readFileSync(path.join(__dirname, 'product.json'), 'utf-8'));
  res.json(products);
});
app.get('/footwear',async(req,res)=>{
  const products =await JSON.parse(fs.readFileSync(path.join(__dirname, 'product.json'), 'utf-8'));
  res.json(products);
});
app.get('/eyewear',async(req,res)=>{
  const products =await JSON.parse(fs.readFileSync(path.join(__dirname, 'eyewear.json'), 'utf-8'));
  res.json(products);
});
app.get('/jwells',async(req,res)=>{
  const products =await JSON.parse(fs.readFileSync(path.join(__dirname, 'product.json'), 'utf-8'));
  res.json(products);
});
    
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
