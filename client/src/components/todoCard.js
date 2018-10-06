import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function todoCard({ todo, deleteTodo }) {
    return (
        <div className="ui card">
            <div className="card">
                <div className="content">
                    <div className="header">{todo.task}</div>
                    <div className="description">{todo.note}</div>
                </div>

                <div className="extra content">
                    <div className="ui two buttons">
                        <Link to={`/todo/${todo._id}`} className="ui basic button green">Edit</Link>
                        <button className="ui basic button red" onClick={() => deleteTodo(todo._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

todoCard.propTypes = {
    todo: PropTypes.object.isRequired
}