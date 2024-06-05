const express = require('express')
const cors = require('cors')
const moviesData = require('./movies.json')

const app = express()
const PORT = 4000
let movies = [...moviesData]

app.use(cors())
app.use(express.json())

app.get('/movies', (req, res) => {
    // console.log(movies);

    res.json(movies)
})

app.post('/movies', (req, res) => {

    const { title, protagonist, category, url } = req.body;

    console.log(JSON.stringify(req.body));

    const newMovie = {
        id: movies.length + 1,
        title,
        protagonist,
        category,
        url
    }
    movies.push(newMovie)
    res.status(201).json(newMovie)
})

app.get('/movies/:id', (req, res) => {
    const { body: {id} } = req

    console.log(movies);

    const movie = movies.filter(t => t.id === parseInt(id))

    if (movie) {
        res.json(movie)
    } else {
        res.status(404).send('No se encontró la tarea')
    }

})

app.put('/movies/:id', (req, res) => {

    const { body: {title, protagonist, category, url}, params: {id} } = req

    const movie = movies.find(movie => movie.id == parseInt(id))
    console.log('corriendo', req.body, req.params.id);

    if (movie) {
        movie.title = title || movie.title,
        movie.protagonist = protagonist || movie.protagonist,
        movie.category = category || movie.category,
        movie.url = url || movie.url,
        res.json(movie)
    } else {
        res.status(404).send("No se actualizo la película.")
    }
})

app.patch('/movies/:id', (req, res) => {
    
    const { body: {title, protagonist, category, url}, params: {id} } = req

    const movie = movies.find(movies => movie.id === parseInt(id))

    if (movie) {
        if (title !== undefined) {
            movie.title = title
        }

        if (protagonist !== undefined) {
            movie.protagonist = protagonist
        }

        if (category !== undefined) {
            movie.category = category
        }

        if (url !== undefined) {
            movie.url = url
        }

        res.json(movie)
    } else {
        res.status(404).send('No se encontro la tarea')
    }

})

app.delete('/movies/:id', (req, res) => {

    const { params: { id } } = req

    const movieIn = movies.findIndex(movie => movie.id == parseInt(id))

    if (parseInt(id) !== -1) {
        movies.splice(movieIn, 1)
        res.status(204).send('Registro eliminado')
    } else {
        res.status(404).send('No se elimino la tarea')
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en la url http://localhost:${PORT}`)
})