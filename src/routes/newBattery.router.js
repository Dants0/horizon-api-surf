const express = require("express")
const router = express.Router()

const newBattery = require("../controllers/battery.controller")

router.post("/", newBattery.createNewBattery)

module.exports = router