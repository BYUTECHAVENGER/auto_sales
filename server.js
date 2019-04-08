const express = require("express")
const app = express()
const os = require('os')
// const session = require ("express-session")
app.use(express.urlencoded({extended: true}));//required to use .body
app.set('view engine', 'ejs')
app.set('views', 'views')
// app.use(session({
//     secret: "Unicorns dont fly, Pegusus' can fly, but have no horn.",
//     resave: false,
//     saveUninitialized: true
// }));

// connect to postgres database
const { Pool } = require('pg')
const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:KNOWNGOOD@localhost:5432/cars'
const pool = new Pool({ connectionString: dbUrl })

app.use(express.static("public"))

app.post("/UserLogin", (req,res) => {
    var userName =  req.body.userName;
    var userPass =  req.body.userPass;
    var selectFromdb = "SELECT passwd FROM users WHERE user_name = $1"
    var array_of_user_data = [userName]
    console.log(req.body.userName)
    console.log(req.body.userPass)
    
    pool.query(selectFromdb, array_of_user_data, (error, result) => {
        // console.log(result.rows[0])
        if (error) console.log(error);
        else {
            var userPassword = result.rows[0].passwd
                if (userPass == userPassword) {
                    // req.session.goodLogin = true
                    res.send({successfulLogin: true})
                }
                else{res.send({successfulLogin: false})}
            }
    })


})
app.get("/CreateAuto", (req, res) => {
    var Make = req.query.make;
    var Model = req.query.model;
    var Color = req.query.color;
    var Year = req.query.manu_year;
    var Class = req.query.class;
    var Doors = req.query.doors;
    var Price = req.query.price;
    var URL = req.query.img;
    var array_of_user_data = [Make, Model, Color, Year, Class, Doors, Price, URL]
    var selectFromdb = "INSERT INTO vehicles (make, model, color, manu_year, class, doors, price, img) Values ($1, $2, $3, $4, $5, $6, $7, $8) "


    pool.query(selectFromdb, array_of_user_data, (error, result) => {
        if (error) {
            res.send({message:"Automobile WAS NOT entered successfully into database of cars for sale, PLEASE RETRY"})
        
            console.log(error);
        }
        else {
            
            res.send({message:"Automobile entered successfully into database of cars for sale. <br> PRESS F5 key to refresh the page if you want to add another automobile."})

        }
    })
})

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
