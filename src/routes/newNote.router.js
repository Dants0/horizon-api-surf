const express = require("express")
const router = express.Router()

const newNote = require("../controllers/notes.controller")

router.post("/:surfistaId", newNote.assignWaveNotes)

module.exports = router