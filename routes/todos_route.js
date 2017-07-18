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

router.post('/', todosController.create)

router.put('/:id', todosController.onDone)

router.delete('/:id', todosController.destroy)

module.exports = router
