const express = require("express")
const router = express.Router()

const deleteSurfer = require("../controllers/surfer.controller")

router.delete("/:id", deleteSurfer.deleteSurfer)

module.exports = router