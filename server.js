const express =require("express")
const app = express()

// connect to postgres database
const {Pool} = require('pg')
const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/dbname'
const pool = new Pool({connectionString: dbUrl})


app.get("/CreateUser", {req, res}=>{
var first_name = req.query.first_name;
var last_name = req.query.last_name;
var user_name = req.query.user_name;
var tele = req.query.tele;
var passwd = req.query.passwd;

console.log("User name is: ")






});