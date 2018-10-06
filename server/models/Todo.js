var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = mongoose.Schema({
    task: { type: String },
    note: { type: String }
})

const Todo = mongoose.model('todos', TodoSchema);
module.exports = Todo;