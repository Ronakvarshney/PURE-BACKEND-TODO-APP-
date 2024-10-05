//import schema
const Todo = require("../models/Todoschema");

//define route handler


exports.createTodo = async function (req, res) {
   
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "entry created successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: " internal server error",
    });
  }
};
