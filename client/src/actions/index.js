import axios from 'axios';

export const ADD_TODO = "ADD_TODO";
export const GET_TODOS = "GET_TODOS";
export const TODO_FETCHED = "TODO_FETCHED";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function getTodos(todos) {
    console.log("Get Todos :", todos);

    return {
        type: GET_TODOS,
        todos
    }
}


export function fetchTodos() {
    console.log("Action from fetchTodos");
    return (dispatch) => {
        return axios.get('http://localhost:5000/api/todos')
            .then(response => {
                console.log("Todos in actions: ", response.data.todos);
                dispatch(getTodos(response.data.todos))

            })
    }

}
export function todoFetched(todo) {
    return {
        type: TODO_FETCHED,
        todo
    }
}
export function fetchTodo(id) {
    return dispatch => {
        return axios.get(`http://localhost:5000/api/todos/${id}`)
            .then(response => {
                console.log("TODO:", response);

                dispatch(todoFetched(response.data.todo));
            })
    }
}
export function saveTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function addTodo(todo) {
    console.log("From action todo: ", todo);
    return (dispatch) => {
        return axios.post('http://localhost:5000/api/todos', todo)
            .then(res => {
                console.log("From addTodo Action ", res);

                dispatch(saveTodo(todo))
            })
    }

}
export function todoUpdate(todo) {
    return {
        type: UPDATE_TODO,
        todo
    }
}
export function updateTodo(todo) {
    console.log("Udpate tod: ", todo);
    return dispatch => {
        return axios.put(`http://localhost:5000/api/todo/${todo._id}`, todo)
            .then(res => {
                console.log("Updated todo: ", res);
                dispatch(todoUpdate(res.data))

            })
    }

}
export function todoDelete(todoId) {
    return {
        type: DELETE_TODO,
        todoId
    }
}
export function deleteTodo(id) {
    console.log("Delete todo ", id);
    return dispatch => {
        return axios.delete(`http://localhost:5000/api/todo/${id}`)
            .then(res => {
                console.log("Updated todo: ", res);
                dispatch(todoDelete(id))

            })
    }

}