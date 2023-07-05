const express = require("express")
const router = express.Router()

const newWave = require("../controllers/wave.controller")

router.post("/", newWave.createNewWave)

module.exports = router