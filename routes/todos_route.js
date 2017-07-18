const express = require('express') // borrow express function, but not running express

const todosController = require('../controllers/todos_controller')

const router = express.Router()

// before
// router.get('/', function (req, res) {
//   res.send('list all todos')
// })

// after modularizing controller
router.get('/', todosController.list)
router.get('/:id', todosController.show)

router.post('/', function (req, res) {
  res.send('create new todo')
})

router.put('/:id', function (req, res) {
  res.send(`updating a todo with id ${req.params.id}`)
})

router.delete('/:id', function (req, res) {
  res.send(`updating a todo with id ${req.params.id}`)
})

module.exports = router
