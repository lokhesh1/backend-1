import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./database.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({
  origin:'http://localhost:3000',credentials:true
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
  const result=await db.query("SELECT * FROM products");
  res.json(result.rows);
});
app.get('/perfumes',async(req,res)=>{
  const result=await db.query("SELECT * FROM products");
  res.json(result.rows);
});
app.get('/clothing',async(req,res)=>{
  const result=await db.query("SELECT * FROM products");
  res.json(result.rows);
});
app.get('/footwear',async(req,res)=>{
  const result=await db.query("SELECT * FROM products");
  res.json(result.rows);
});
app.get('/eyewear',async(req,res)=>{
  const result=await db.query("SELECT * FROM eyewear");
  res.json(result.rows);
});
app.get('/jwells',async(req,res)=>{
  const result=await db.query("SELECT * FROM products");
  res.json(result.rows);
});
    
 

app.post("/login", async (req, res) => {
    const email=req.body.email;
    const password=req.body.password;
    
     
    try{
      req.session.logged=true;
    const check=await db.query("SELECT * FROM users WHERE email=$1",
     [email,]);
     if (check.rows.length > 0) {
      return res.json({login:true});
    }else{
    const result=await db.query(
        "INSERT INTO users (email,password) VALUES ($1,$2)",
        [email,password]
      );
      console.log(result);}
    }
    catch(err){
        console.log(err);
     }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
