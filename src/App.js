import React, { Component } from 'react';
import Header from '/react/crash-course/trav-todo/todo/src/components/layout/Header.js';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: 'Take out the trash',
      completed: false
      }, 
      {
    id: 2,
    title: 'Dinner with wife',
    completed: true
      },
      {
  id: 3,
  title: 'Meeting with boss',
  completed: false
      }
    ]
  }
// toggle complete
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id)  {
      todo.completed = !todo.completed
    }
    return todo;
  }) });
    console.log(id)
}

//Delete Todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}
// Add Todo
addTodo = (title) => {
  const newTodo = {
    id: 4,
    title: title,
    completed:false
  }
  console.log(title);
    this.setState({ todos: [...this.state.todos, newTodo]});


}

  render() {
    console.log(this.state.todos)
  return (
    <div className="App">
    <div className="container">
<Header />
<AddTodo addTodo={this.addTodo} />
    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
    </div>
    </div>
  );
}
}
export default App;
