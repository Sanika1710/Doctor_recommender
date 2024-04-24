const mongoose = require("mongoose");
require("dotenv").config();
const connectToMongo = async () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("Connected to Mongo"); return true }).catch((err) => {
        console.log(err)
        return false
    })
}

module.exports = connectToMongo