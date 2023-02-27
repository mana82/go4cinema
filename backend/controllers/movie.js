const Movie = require('../models/movie-model')

createMovie = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a movie name and other information to create a movie!',
        })
    }

    const movie = new Movie(body)

    if (!movie) {
        return res.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'The movie information created successfully!',
                data: movie
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Something wrong! The movie not created!',
            })
        })
}

updateMovie = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please provide a information to update!',
        })
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'The movie cannot find!',
            })
        }
        movie.name = body.name
        movie.year = body.year
        movie.genres = body.genres
        movie.ageLimit = body.ageLimit
        movie.rating = body.rating
        movie.actors = body.actors
        movie.director = body.director
        movie.synopsis = body.synopsis

        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'The movie information successfully updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Something wrong! The movie not updated!',
                })
            })
    })
}

deleteMovie = async (req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `The movie cannot find!` })
        }

        return res.status(200).json({ success: true, message: 'The movie information successfully deleted!' })
    }).catch(err => console.log(err))
}

getMovieById = async (req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `The movie cannot find!` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getMovies = async (req, res) => {
    await Movie.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `No movie found!` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}


module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
}