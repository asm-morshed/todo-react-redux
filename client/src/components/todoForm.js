import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo, fetchTodo, updateTodo } from '../actions/index';
import { Redirect } from 'react-router-dom';

class todoForm extends Component {

    state = {
        _id: this.props.todo ? this.props.todo._id : null,
        task: this.props.todo ? this.props.todo.task : '',
        note: this.props.todo ? this.props.todo.note : '',
        done: false
    }






    componentWillReceiveProps = (nextProps) => {
        console.log("willreceive", nextProps);
        this.setState({
            _id: nextProps.todo._id,
            task: nextProps.todo.task,
            note: nextProps.todo.note
        })
    }
    componentDidMount() {
        if (this.props.match.params._id) {
            this.props.fetchTodo(this.props.match.params._id);
        }

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();

        const { _id, task, note } = this.state;
        if (_id) {
            console.log("Need to update");
            this.props.updateTodo({ _id, task, note })
                .then(() => this.setState({ done: true }))
        } else {
            this.props.addTodo({ task, note })
                .then(() => this.setState({ done: true }))
        }
    }
    render() {
        console.log("Props", this.props);
        const form = <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
                <label htmlFor="task">Task</label>
                <input
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                    id="task"
                />
            </div>
            <div className="field">
                <label htmlFor="note">Note</label>
                <textarea
                    name="note"
                    value={this.state.note}
                    onChange={this.handleChange}
                    id="note"
                />
            </div>
            <div className="field">
                <button className="ui primary button">Save</button>
            </div>
        </form>
        return (
            <div>
                {this.state.done ? <Redirect to="/todos" /> : form}
            </div>
        )
    }
}
function mapStateToProps(state, props) {
    console.log("Prosp1: ", props);
    if (props.match.params._id) {
        return {
            todo: state.todos.find(item => item._id === props.match.params._id)
        }
    }
    return { todo: null }
}
export default connect(mapStateToProps, { addTodo, fetchTodo, updateTodo })(todoForm);