const express = require("express")
const router = express.Router()

const batteryVController = require("../controllers/battery.controller")

router.get("/winner/:id", batteryVController.getWinnerSurfer)

module.exports = router