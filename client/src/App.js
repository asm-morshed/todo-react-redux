import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import todoForm from './components/todoForm';
import todosPage from './components/todosPage';
class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/todos">Todos</Link>
          <Link className="item" to="/todos/add">Add Todo</Link>
        </div>
        <Route exact path="/todos" component={todosPage} />
        <Route exact path="/todos/add" component={todoForm} />
        <Route exact path="/todo/:_id" component={todoForm} />
      </div>
    );
  }
}

export default App;
