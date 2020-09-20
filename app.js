require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser");
const moongoose = require('mongoose')
const app = express()


// Student Route
const studentRoute = require("./routes/students")



//DB Connection 
moongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
})
.then(() => {
    console.log("DB CONNECTED")
})
.catch(() => {
    console.log("DB ERROR")
})






//Middlewares
app.use(bodyParser.json());





app.use("/api" , studentRoute);



//Port
const port = process.env.PORT || 8000;

//Starting a servers
app.listen(port, ()=>{
    console.log(`app is running at ${port}`)
})