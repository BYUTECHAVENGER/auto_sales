const express = require("express")
const app = express()
const os = require('os')

app.set('view engine', 'ejs')
app.set('views', 'views')
// connect to postgres database
const { Pool } = require('pg')
const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:KNOWNGOOD@localhost:5432/cars'
const pool = new Pool({ connectionString: dbUrl })

app.use(express.static("public"))

app.get("/CreateUser", (req, res) => {
    var first_name = req.query.first_name;
    var last_name = req.query.last_name;
    var user_name = req.query.user_name;
    var tele = req.query.tele;
    var passwd = req.query.passwd;
    var array_of_user_data = [first_name, last_name, user_name, tele, passwd]
    var selectFromdb = "INSERT INTO users (first_name, last_name, user_name, tele, passwd) Values ($1, $2, $3, $4, $5) "


    pool.query(selectFromdb, array_of_user_data, (error, result) => {
        if (error) console.log(error);
        else {
            var successfulQuery = { first_name: first_name, last_name: last_name, user_name: user_name, tele: tele, passwd: passwd }
            res.render("Account_Created",successfulQuery)

        }
    })
})

app.get('/carChoice', function (req, res) {
    var Make = req.query.make;
    var Model = req.query.model;
    var Color = req.query.color;
    var array_of_user_data = [Make, Model, Color]
    var selectFromdb = "SELECT * FROM vehicles WHERE make = $1 and model = $2 and color = $3"
    

    pool.query(selectFromdb, array_of_user_data, (error, result) => {
        if (error) console.log(error);
        else {
            res.send({carChoice:result.rows});

        }
    })
})



//  console.log("User name is: ")


//var selectFromdb = "INSERT INTO vehicles (first_name, last_name, user_name, tele, passwd) Values ($1, $2, $3, $4, $5) "





app.set("port", (process.env.PORT || 5000))
app.listen(app.get("port"), () => {
    console.log("You are connected on port ", app.get("port"))
})
