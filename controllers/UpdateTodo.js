const Todo = require("../models/Todoschema");

exports.Updatetodo = async function (req , res) {
    try{
        const response= await Todo.findOneAndUpdate( {title : 'todo new'} , {description : 'todo updated successfully'} , {new : true})
        console.log(response);
        res.send(response)
    }
    catch{
        res.send('error occurs while updating')
    }
 
    
}