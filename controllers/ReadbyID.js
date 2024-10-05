const Todo = require("../models/Todoschema");

exports.getTodo = async function( req , res) {
    try{
     const data = await Todo.findOne()
     res.status(200).json({
        success : true ,
        data : data 
     })
    }
    catch(error){
        res.status(500).json({
            success : false ,
            data : "error occurs",
            message : error.message
        })

    }
    
}

exports.getTodoByID= async function( req , res){

    try{
        const id = req.params.id ;
       const todo = await Todo.findById({_id : id})

       if(!todo){
         return res.status(404).json({
            success : false ,
            message :" no data found"
         })
       }
       res.status(200).json({
        success : true ,
        data : todo ,
        message : " data found by id"
       })
    }
    catch(error){
        res.status(500).json({
            success : false ,
            data : "error occurs",
            message : error.message
        })

    }
}