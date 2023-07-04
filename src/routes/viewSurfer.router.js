const express = require("express")
const router = express.Router()

const surferController = require("../controllers/surfer.controller")

router.get("/surfer", surferController.getAllSurfers)

router.get("/:id", surferController.getSurferById)

router.get("/cidade_natal/:pais", surferController.getSurferByCountry)

module.exports = router