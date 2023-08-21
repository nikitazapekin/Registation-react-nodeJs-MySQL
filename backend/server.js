const express= require("express")
const mysql = require('mysql')
const cors= require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res)=> {
    /*const sql = "Insert into login (`name`, `email`, `password`) values (?)"
    const values = [
        req.body.name,
        req.body.email,
         req.body.password
    ] */
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
const values = [
    req.body.name,
    req.body.email,
    req.body.password
];

    console.log("VAL"+values)
    db.query(sql, [values], (err, data)=> {
        if(err){
            return res.json('error')
        }
        return res.json(data)
    })
})




app.post('/login', (req, res)=> {
   // const sql = "select  * from login where `email` = ? and `password`= ?"
   const sql = "SELECT * FROM login  WHERE `email` = ? AND `password` = ?"
    db.query(sql, [req.body.email, req.body.password], (err, data)=> {
        if(err){
            return res.json('error')
        }
        if(data.length > 0){
            return res.json("success")
        }
        else {
            return res.json("faile")
        }
    })
})


app.listen(8081, ()=> {
    console.log("listening")
})

//npm start
//yosaf khan,yousaft@gmail.com,asdlAS1234
//	alexey@gmail.com  alEXEY123
//neNikita@gmail.com neNIKITA12345

//andrei@mail.ru  anDREI12345