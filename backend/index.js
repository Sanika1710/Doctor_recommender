const express = require("express");
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectToMongo = require("./db")
connectToMongo();

app.use(cors({
    origin: "*"
}))
app.use(express.json())

app.use("/", require("./routes/route"))

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(5000, () => {
    console.log("Server is running on port 5000")
})