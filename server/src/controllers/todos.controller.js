const { v4 } = require('uuid');
const TodoModel = require('../models/todo.model');

const todosController = {};

// Obtener todas las tareas
todosController.getAllTodos = async (req, res) => {
  try {
    const allTodos = await TodoModel.find();
    res.send(allTodos);
  } catch (error) {}
};

todosController.createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel({
      _id: v4(),
      name: req.body.name,
      completed: false
    });

    await newTodo.save();

    const allTodos = await TodoModel.find();
    res.send(allTodos);
  } catch (error) {}
};

todosController.updateTodo = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await TodoModel.updateOne({ _id: id }, { $set: { ...req.body } });

    const allTodos = await TodoModel.find();
    res.send(allTodos);
  } catch (error) {}
};

todosController.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await TodoModel.deleteOne({ _id: id });

    const allTodos = await TodoModel.find();
    res.send(allTodos);
  } catch (error) {}
};

module.exports = todosController;
