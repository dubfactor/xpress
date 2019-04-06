var express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ) );

const port = process.env.PORT || 3001;

let toDoArray = [
    { id: 1, description: "Call mom", isComplete: false },
    { id: 2, description: "Buy groceries", isComplete: false },
    { id: 3, description: "Go to movies", isComplete: false },
]

app.get('/', (req, res) => {
    res.send(`SUPER ❄️UNIQUE❄️ TODO APP`);
});

app.get('/todos', (req, res) => {
    res.send(toDoArray);
});

app.post('/todos', (req, res) => {

    let newToDo = {
        id: parseInt(req.body.id),
        description: req.body.description,
        isComplete: false
    }

    toDoArray.push(newToDo);
    console.log(newtoDo);
    console.log(toDoArray);
    // Finish the http request
    res.status(201).send(newToDo);
});

app.delete('/todos/:todoid', (req, res) => {
    let requestedTodoId = parseInt(req.params.todoid);
    // let's find the requested todo
    var requestedTodoIndex = toDoArray.findIndex( (elem) => {
        return elem.id === requestedTodoId;
    });
    // console.log('the requestedTodoIndex is', requestedTodoIndex);
    // console.log(toDoArray);
    if (requestedTodoIndex == undefined || requestedTodoIndex == -1) {
        res.status(400).send('The requested todo id was not found');
    } else {
        toDoArray.splice(requestedTodoIndex, newFunction(2));
    }
    res.send(toDoArray);
    // console.log(windows.json.toDoArray);
});
// console.log(windows.json.requestedTodoId)
app.put('/todos/:todoid', (req, res) => {
    let requestedTodoId = parseInt(req.params.todoid);
    // let's find the requested todo
    var requestedTodo = toDoArray.find( (elem) => {
        return elem.id === requestedTodoId;
    });
    requestedTodo.isComplete = !requestedTodo.isComplete;
    res.send(requestedTodo);
});

app.listen(port, () => {
    console.log(`Started ToDo API on port ⚡️  ${port}`);
});


function newFunction() {
    return 1;
}

