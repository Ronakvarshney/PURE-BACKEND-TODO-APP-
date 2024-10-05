// route ko map krthe h controller ke sth 
const  express = require('express');

const router = express.Router();

// import controller
const {createTodo} = require('../controllers/createTodo');
const { ReadTodo } = require('../controllers/ReadTodo');
const { getTodo , getTodoByID} = require('../controllers/ReadbyID');
const { Updatetodo } = require('../controllers/UpdateTodo');
const { Deletetodo, DeletetodobyID } = require('../controllers/DeleteTodo');

//define api routes
router.post ('/createTodo' , createTodo);
router.get('/update' , Updatetodo)
router.get('/ReadTodo' , ReadTodo);
router.get('/getTodo' , getTodo)
router.get('/getTodo/:id' , getTodoByID)
router.get('/delete' , Deletetodo)
router.get('/delete:id' , DeletetodobyID)


module.exports = router ;