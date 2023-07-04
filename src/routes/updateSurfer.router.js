const express = require("express")
const router = express.Router()

const updateSurferController = require("../controllers/surfer.controller")

router.put("/:id", updateSurferController.updateSurfer)

module.exports = router