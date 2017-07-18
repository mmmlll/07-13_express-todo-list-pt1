// yarn install modules
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const express = require('express')
const bodyParser = require('body-parser')

// internal module
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/todo-list', {
  useMongoClient: true
}).then(
  function () { // resolve cb
    console.log('connected successfully')
  },
  function (err) { // reject cb
    console.log(err)
  }
)

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// TODO. include express and body-parser, plugin in the todos controller and start listening
app.use(express.static('/public'))
app.use(bodyParser.urlencoded({
  extended: true
}))

const todosRoute = require('./routes/todos_route')

app.use('/todos', todosRoute) // is a middleware

// app.get('/todos', function (req, res) {
//   res.send('render all todos')
// })
//
// app.post('/todos', function (req, res) {
//   res.send('create new todos')
// })

const port = 4000
app.listen(port, function () {
  console.log(`express is running on ${port}`)
})
