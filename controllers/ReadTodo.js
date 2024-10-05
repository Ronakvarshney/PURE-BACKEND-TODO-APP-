const Todo = require("../models/Todoschema");

exports.ReadTodo = async function (req, res) {
  try {
    const data = await Todo.find();
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
