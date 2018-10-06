var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//var key = require('./config/keys');
var Todo = require('./models/Todo');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/todofinal')
    .then(res => console.log("Database is connected"))
    .catch(err => console.log("Error during connecting Database", err))



app.get('/api/todos', (req, res) => {
    console.log("Request from Get all todos");

    Todo.find()
        .then(response => {
            res.status(200).json({
                todos: response
            })
        })
        .catch(error => {
            res.status(400).json({
                message: 'Error during fetching all todos from DB'
            })
        })

})
app.post('/api/todos', (req, res) => {
    console.log("Request from Post Todo");
    const newTodo = new Todo({
        task: req.body.task,
        note: req.body.note
    })
    newTodo.save()
        .then(todo => {
            res.json({ todo })
        })
        .catch(error => {
            res.json({
                message: 'Error during saving data into database'
            })
        })

})
app.get('/api/todos/:_id', (req, res) => {
    console.log("todo with ID from server");

    Todo.findById({ _id: req.params._id })
        .then(todo => res.json({ todo }))
        .catch(error => console.log("Error during a specific todo")
        )
})
app.put('/api/todo/:_id', (req, res) => {
    console.log("from server for update");
    console.log(req.body);

    const { task, note } = req.body;
    Todo.findOneAndUpdate({ _id: req.params._id }, { $set: { task: task, note: note } })
        .then(todo => res.json({ todo }))

})
app.delete('/api/todo/:_id', (req, res) => {
    console.log("from server for Deleting");
    console.log(req.body);

    const { task, note } = req.body;
    Todo.findOneAndRemove({ _id: req.params._id })
        .then(() => res.json({}))

})
var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})