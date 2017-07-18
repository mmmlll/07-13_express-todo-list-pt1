const Todo = require('../models/todo')

// TODO. import express and create a Router, replace the methods below with routes e.g.
// router.post('/', function(req,res) => {
//  Todo.create(req.body, function (err, todo) {
//    res.json(todo)
//  }
// })

function create (req, res) {
  var params = req.body.todo

  Todo.create(params, function (err, todo) {
    if (err) {
      console.log(err)
      return
    }
    res.redirect('/todos')
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

// this is a function that changes many things inside a todo
function update (id, params) {
  Todo.findOneAndUpdate({ _id: id }, params, function (err, todo) {
    if (err) console.log(err)
    console.log(todo)
  })
}

// this is a fn that changes only the completed property
function onDone (req, res) {
  var qObj = { _id: req.params.id }
  var updateObj = { completed: true }

  Todo.findOneAndUpdate(qObj, updateObj, function (err, updatedTodo) {
    if (err) {
      console.log(err)
    }

    res.redirect('/todos')
  })
}

function destroy (req, res) {
  Todo.findOneAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/todos')
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  onDone
}
