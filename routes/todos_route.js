const express = require('express')
const router = express.Router()
const todos_controller = require('../controllers/todos_controller')

// before sticking functions into controller file
// router.get('/', function (req, res){    // we replaced app.get with router.get. "app" is referred to in the index.js file, using app.use('/todos', todosRoute)
//   res.send('list all todos')
// })
// router.get('/:id', function (req, res){
//   res.send(`show todo with id ${req.params.id}`)
// })

// after modularizing controllers
router.get('/', todos_controller.list)
router.get('/:id', todos_controller.show)

router.post('/', function (req, res){   // we replaced app.post with router.post
  res.send('create new todo')
})


router.put('/:id', function (req, res){
  res.send(`update todo with id ${req.params.id}`)
})

router.delete('/:id', function (req, res){
  res.send(`delete todo with id ${req.params.id}`)
})

module.exports.router = router 
