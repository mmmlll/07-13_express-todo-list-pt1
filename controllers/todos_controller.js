const Todo = require('../models/todo')

// TODO. import express and create a Router, replace the methods below with routes e.g.
// router.post('/', function(req,res) => {
//  Todo.create(req.body, function (err, todo) {
//    res.json(todo)
//  }
// })

function create (params) {
  Todo.create(params, function (err, todo) {
    if (err) {
      console.log(err)
      return
    }
    console.log(todo)
  })
}

function list (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      console.log(err)
      return
    }

    console.log(todos)
    res.render('todos/index', {
      allTodos: todos
    })
  })
}

function show (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) return console.log(err)
    res.send(todo)
  })
}

function update (id, params) {
  Todo.findOneAndUpdate({ _id: id }, params, function (err, todo) {
    if (err) console.log(err)
    console.log(todo)
  })
}

function destroy (id) {
  Todo.findOneAndRemove({ _id: id }, function (err) {
    if (err) console.log(err)
    console.log('User deleted!')
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy
}
