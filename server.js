const express =require("express")
const app = express()

// connect to postgres database
const {Pool} = require('pg')
const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/dbname'
const pool = new Pool({connectionString: dbUrl})

app.use(express.static("public"))

app.get("/CreateUser", {req, res}=>{
var first_name = req.query.first_name;
var last_name = req.query.last_name;
var user_name = req.query.user_name;
var tele = req.query.tele;
var passwd = req.query.passwd;
var array_of_user_data =[first_name, last_name, user_name, tele, passwd]
var selectFromdb = "INSERT INTO vehicles (first_name, last_name, user_name, tele, passwd) Values ($1, $2, $3, $4, $5) "
pool.query(selectFromdb, userInfo, (error, results)=>{
    if(err) throw err;
    else{
        var succeedQuery = result.rows
        res.render(succeedQuery)
    }
})



console.log("User name is: ")






});

app.set("port", (process.env.PORT || 5000))
app.listen(app.get)