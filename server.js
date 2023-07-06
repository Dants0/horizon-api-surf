const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const newSurfer = require("./src/routes/newSurfer.router")
const viewSurfer = require("./src/routes/viewSurfer.router")
const updateSurfer = require("./src/routes/updateSurfer.router")
const deleteSurfer = require("./src/routes/deleteSurfer.router")

app.use("/api/v1/surfer/", viewSurfer)
app.use("/api/v1/surfer/", viewSurfer)
app.use("/api/v1/surfer/register", newSurfer)
app.use("/api/v1/surfer/", updateSurfer)
app.use("/api/v1/surfer/", deleteSurfer)

const newBattery = require("./src/routes/newBattery.router")
const viewBattery  = require("./src/routes/viewBattery.router")

app.use("/api/v1/bateria", newBattery)
app.use("/api/v1/bateria", viewBattery)

const newWave = require("./src/routes/newWave.router")
app.use("/api/v1/wave", newWave)

const assignNotes = require("./src/routes/newNote.router")
app.use("/api/v1/notes/", assignNotes)

app.listen(process.env.PORT || port, ()=> console.log('listening on port 3000'))