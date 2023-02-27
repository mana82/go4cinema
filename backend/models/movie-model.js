const mongoose = require('mongoose')

const Schema = mongoose.Schema

/*
[{"name":"Avengers: Endgame",
"year":2018,
"genres":["Adventure","Sci-fi"],
"ageLimit":12,
"rating":4,
"actors":[{"firstName":"Robert","lastName":" Downey Jr."},{"firstName":"Chris","lastName":"Evans"},{"firstName":"Scarlett","lastName":"Johansson"}],
"director":{"firstName":"Anthony","lastName":"Russo"},
"synopsis":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."},
 */
const MovieSchema = new Schema(
    {
        name: { type: String, required: true },
        year: { type: [String], required: true },
        genres: {type: [String], required: false},
        ageLimit: {type: [String], required: false},
        rating: { type: Number, required: false },
        actors: [{ firstName: String, lastName: String }],
        director: [{ firstName: String, lastName: String, required: false}],
        synopsis: {type: [String], required: false},

    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', MovieSchema)
