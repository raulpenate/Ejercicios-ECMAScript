const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 4000
let tasks = []

app.use(cors())
app.use(express.json())

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    }
    tasks.push(newTask)
    res.status(201).json(newTask)
})

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.filter(t => t.id === taskId)
    if (task) {
        res.json(task)
    } else {
        res.status(404).send('No se encontró la tarea')
    }
})

app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t => t.id === taskId)
    if (task) {
        task.title = req.body.title || task.title,
        task.completed = req.body.completed !== undefined ? req.body.completed : task.completed
        res.json(task)
    } else {
        res.status(404).send("No se actualizo la tarea")
    }
})

app.patch('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t=>t.id === taskId)
    if (task) {
        if (req.body.title !== undefined) {
            task.title = req.body.title
        }
        if (req.body.completed !== undefined) {
            task.completed = req.body.completed
        }
        res.json(task)
    } else {
        res.status(404).send('No se encontro la tarea')
    }

})

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const taskIn = tasks.findIndex(t => t.id === taskId)
    if (taskId !== -1) {
        tasks.splice(taskIn, 1)
        res.status(204).send('Registro eliminado')
    } else {
        res.status(404).send('No se elimino la tarea')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en la url http://localhost:${PORT}`)
})