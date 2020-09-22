require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser");
const moongoose = require('mongoose')
const cors = require("cors");
const exphbs = require('express-handlebars')
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
.catch((err) => {
    console.log("DB ERROR",err)
})






//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use(express.static('views/images'))

//handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname:  '.hbs'}));
app.set('view engine', '.hbs');




app.get("/", (req,res) => {
    res.render('landing' )
})


app.use("/api" , studentRoute);



//Port
const port = process.env.PORT || 8000;

//Starting a servers
app.listen(port, ()=>{
    console.log(`app is running at ${port}`)
})