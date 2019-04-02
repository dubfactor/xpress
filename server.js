var express = require('express')
var morgan = require('morgan')
var app = express()
var bodyParser = require('body-parser')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var port = process.env.PORT || 3001

var toDoArray = [
    {id: 1, description: "Call mom", isComplete: false},
    {id: 2, description: "Buy Groceries", isComplete: false},
    {id: 3, description: "Go to movies", isComplete: false}
]

app.get("/", function(req, res) {
    res.send('You have reached my ToDOs API!!')
})

app.get("/todos", function(req, res) {
    res.send(toDoArray)
})

app.post("/todos", function (req, res) {
    let newTodo = {
    id: parseInt(req.body.id),
    description: req.body.description,
    isComplete: false
    }
    toDoArray.push(newTodo)
    console.log(toDoArray)
    res.status(201).send(newTodo)

})



app.listen(port, function()  {
        console.log(`Started ToDo API on port ${port}`)
        console.log(toDoArray)
})