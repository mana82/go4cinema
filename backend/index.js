const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
var cors = require("cors");

const db = require('./db')
const movieRoute = require('./routes/movie-router')

const app = express();
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
//app.listen(port, () => console.log(`Server running on port ${port}`))

app.get('/', (req, res) => {
    res.send('Welcome to Go4 Cinema!')
})

db.on('error', console.error.bind(console, 'Oops! MongoDB connection error:'))

app.use('/api', movieRoute)

app.listen(port, () => console.log(`Server running on port ${port}`))
