const Todo = require("../models/Todoschema");

exports.Deletetodo = async function (req , res) {
    try{
        const response = await Todo.findOneAndDelete({title : 'todo new'})
    res.send(response)
    }
    catch{
        res.send("error occurs while deleting")
    }
   
    
}

exports.DeletetodobyID = async function ( req ,  res) {
    try{
        const id = req.params.id ;
        const response= await Todo.findByIdAndDelete({_id : id})
        res.send(response)
    }
    catch{
        res.send('error occurs while deleting')
    }
    
}