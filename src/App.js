import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import { todos } from './todos.json';
import TodoForm from  './components/TodoForm';



class App extends Component {

  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    if (window.confirm('Are you sure you want to delet it?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill bg-danger ms-2">
                {todo.priority}
              </span>
            </div>
            <div classname="card-body">
              <p>{todo.description}</p>
              <p><b>{todo.responsible}</b></p>
            </div>
            <div className="card-footer">
              <button
              className="btn btn-danger"
              onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark ps-3">
          <a href='. . .' className="text-white">
            Tasks
            <span className="badge badge-pill bg-light ms-2 text-dark">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>





        

      </div>
    );
  }
}

export default App;
