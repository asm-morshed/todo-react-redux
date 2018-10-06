import React, { Component } from 'react'
import { connect } from 'react-redux';
import TodosList from './todosList';
import { fetchTodos, deleteTodo } from '../actions';
import PropTypes from 'prop-types';

class todosPage extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }
    render() {
        console.log("TodosPage: ", this.props);
        return (
            <div>
                <TodosList todos={this.props.todos} deleteTodo={this.props.deleteTodo} />
            </div>
        )
    }
}

todosPage.propTypes = {
    todos: PropTypes.array.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, { fetchTodos, deleteTodo })(todosPage);