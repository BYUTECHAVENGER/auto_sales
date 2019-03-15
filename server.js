const express =require("express")
const app = express()


app.get("/CreateUser", {req, res}=>{
var first_name = req.query.first_name;
var last_name = req.query.last_name;
var user_name = req.query.user_name;
var tele = req.query.tele;
var passwd = req.query.passwd;

console.log("User name is: ")






});