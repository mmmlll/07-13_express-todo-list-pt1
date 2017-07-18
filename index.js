const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const todosController = require('./controllers/todos_controller')

mongoose.connect('mongodb://localhost/todo-list')
mongoose.Promise = global.Promise

// TODO. include express and body-parser, plugin in the todos controller and start listening


const todosRoute = require('./routes/todos_route')
app.use('/todos', todosRoute)     // app.use helps us avoid writing app.get, app.post within the js file. We move all that code into a router file
