const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://go4cinema-mongo-1:27017/cinema",
        {
            auth: {
                username: "mana",
                password: "12345",
            },
            authSource: "admin",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.error("failed to connect to mongoDB");
                console.error(err);
            } else {
                console.log("mongodb is running and secured");
            }
        }
);

const db = mongoose.connection
module.exports = db