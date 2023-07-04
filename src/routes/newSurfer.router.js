const express = require("express")
const router = express.Router()

const newSurferController = require("../controllers/surfer.controller")

router.post("/", newSurferController.createNewSurfer)

module.exports = router