const express = require('express')
const movie = require('../controllers/movie')

const router = express.Router()

router.post('/movies', movie.createMovie)
router.put('/movies/:id', movie.updateMovie)
router.delete('/movies/:id', movie.deleteMovie)
router.get('/movies/:id', movie.getMovieById)
router.get('/movies', movie.getMovies)

module.exports = router