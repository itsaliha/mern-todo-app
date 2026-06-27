// index.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo') // Make sure this file exists

const app = express()

// Middleware
app.use(cors()) // Allow cross-origin requests (React <-> Express)
app.use(express.json()) // Parse JSON from request body

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://aliha:66778899@todolist.qrqkp6x.mongodb.net/todo?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err))


app.get('/get', (req,res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// Add a new todo
app.post('/add', (req, res) => {
  const task = req.body.task

  TodoModel.create({ task: task })
    .then(result => res.json(result)) 
    .catch(err => res.status(500).json({ error: err.message })) 
})

app.put('/update/:id', (req,res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => err.json(err))

})

app.delete('/delete/:id', (req,res) =>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => err.json(err))

})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})