
const express= require('express')
const app=express()

// app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())



const todoRoutes = require('./routes/Todo');

//MOUNTING 
app.use('/api/v1' , todoRoutes);

//connect with database
const dbconnect = require('./config/database')
dbconnect();


//default route
app.get('/' , ( req , res)=>{
    res.send("hello world")
})

app.listen( 5000 , ()=>{
    console.log("server started ")
})

