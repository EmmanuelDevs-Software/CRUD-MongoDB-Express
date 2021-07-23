const express = require('express');
const { isAuthenticated } = require('../middlewares');
const todoController = require("../controller/todoController");

const router = express.Router();

router.post('/', isAuthenticated, todoController.create);
router.get('/', isAuthenticated, todoController.getTodos);
router.get('/:id', isAuthenticated, todoController.getTodo);
router.put('/:id', isAuthenticated, todoController.updateTodo);
router.delete('/:id', isAuthenticated, todoController.deleteTodo);

module.exports = router;