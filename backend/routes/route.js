const express = require("express")
const router = express.Router()
const disease = require("../controllers/disease")

router.post("/disease", disease )

module.exports = router