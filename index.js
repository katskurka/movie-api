/* eslint-disable no-console */
const express = require('express')
const app = express()
const { getAllMovies, getByTitle, getByDirector, newMovie } = require('./controllers/movies')

app.use(express.json())

app.get('/movies', getAllMovies)

app.get('/movies/:title', getByTitle)

app.get('/movies/director/:director', getByDirector)

app.post('/movies', newMovie)

app.listen(3000, () => {
  console.log('yay server is up')
})
