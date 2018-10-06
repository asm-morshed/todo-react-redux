import React from 'react'
import TodoCard from './todoCard';
import PropTypes from 'prop-types';

const TodosList = ({ todos, deleteTodo }) => {

    console.log("From TodoList client: ", todos);
    const emptyMessage = (
        <p>You don't have any task</p>
    )
    const todosList = (
        <div className="ui four cards">
            {todos.map(todo => <TodoCard todo={todo} key={todo._id} deleteTodo={deleteTodo} />)}
        </div>
    )

    return (
        <div>
            {todos.length === 0 ? emptyMessage : todosList}
        </div>
    )
}
TodosList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
export default TodosList;