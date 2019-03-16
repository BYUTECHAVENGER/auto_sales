const express =require("express")
const app = express()


app.set('view engine','views')
app.set('views', 'views')
// connect to postgres database
const {Pool} = require('pg')
const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:KNOWNGOOD@localhost:5432/cars'
const pool = new Pool({connectionString: dbUrl})

app.use(express.static("public"))

app.get("/CreateUser", (req, res)=>{
var first_name = req.query.first_name;
var last_name = req.query.last_name;
var user_name = req.query.user_name;
var tele = req.query.tele;
var passwd = req.query.passwd;
var array_of_user_data =[first_name, last_name, user_name, tele, passwd]
var selectFromdb = "INSERT INTO users (first_name, last_name, user_name, tele, passwd) Values ($1, $2, $3, $4, $5) "
pool.query(selectFromdb, array_of_user_data, (error, result)=>{
    if(error) console.log(error);
    else{
        var successfulQuery = result.rows
        res.render('UserCreated', successfulQuery)
    }
});



console.log("User name is: ")


//var selectFromdb = "INSERT INTO vehicles (first_name, last_name, user_name, tele, passwd) Values ($1, $2, $3, $4, $5) "



});

app.set("port", (process.env.PORT || 5000))
app.listen(app.get("port"), ()=>{
    console.log("You are connected on port ", app.get("port"))
})