/* eslint-disable no-console */
const movies = require('../movies')
const getAllMovies = (req, res) => {
  return res.send(movies)
}

const getByTitle = (req, res) => {
  const { title } = req.params
  const specificTitle = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))

  return res.send(specificTitle)
}

const getByDirector = (req, res) => {
  let { director } = req.params
  console.log(director)
  const specificDirector = movies.filter(movie => {
    for (directorloop of movie.directors) {
      if (directorloop.toLowerCase().includes(director.toLowerCase())) return true
    }
  })

  return res.send(specificDirector)
}

const newMovie = (req, res) => {
  const { title, directors, releaseDate, rating, runTime, genres } = req.body

  if (!title || !directors || !rating || !runTime || !genres) {
    return res.status(400).send('Need more info')
  }

  const postNewMovie = { title, directors, releaseDate, rating, runTime, genres }

  movies.push(postNewMovie)

  res.send(postNewMovie)
}

module.exports = { getAllMovies, getByTitle, getByDirector, newMovie }
