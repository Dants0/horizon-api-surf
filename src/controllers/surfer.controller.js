const connection = require("../connection/db")
const surferController = {
  getAllSurfers: async (req, res) => {
    try {
      const query = "select * from surfista"
      const [rows, fields] = await connection.query(query)
      res.json({
        data: rows
      })
    } catch (e) {
      console.log(e)
      res.json({
        error: "Error",
        status: '400',
      })
    }
  },

  getSurferById: async (req, res) => {
    try {
      const { id } = req.params
      const query = `select * from surfista where id = ${id}`
      const [rows, fields] = await connection.query(query)
      res.json({
        data: rows,
      })
    } catch (e) {
      console.log(e)
      res.json({
        error: "Error",
        status: '400',
      })
    }
  },

  getSurferByCountry: async (req, res) => {
    try {
      const { pais } = req.params
      const query = "SELECT * FROM surfista WHERE pais = ?";
      const [rows, fields] = await connection.query(query, [pais])
      res.json({
        data: rows,
      })
    } catch (e) {
      console.log(e)
      res.json({
        error: "Error",
        status: '400',
      })
    }
  },

  createNewSurfer: async (req, res) => {
    try {
      const { nome, pais } = req.body
      const sql = "insert into surfista (nome, pais) values (?, ?)"
      const [rows, fields] = await connection.query(sql, [nome, pais])
      res.json({
        data: rows
      })
    } catch (e) {
      console.log(e)
      res.json({
        error: "Error",
        status: '400',
      })
    }
  },

  updateSurfer: async (req, res) => {
    try {
      const { nome, pais } = req.body
      const { id } = req.params
      const query = `update surfista set nome = ?, pais = ? where id = ${id}`
      const [rows, fields] = await connection.query(query, [nome, pais, id])
      res.json({
        data: rows
      })
    } catch (e) {
      console.log(e)
      res.json({
        error: "Error",
        status: '400',
      })
    }
  },

  deleteSurfer: async (req, res) => {
    try {
      const { id } = req.params
      const query = `delete from surfista where id = ${id}`
      const [rows, fields] = await connection.query(query)
      res.json({
        data: rows
      })
    } catch (e) {
      console.log(e)
      res.json({ 
        error: "Error",
        status: '400',
      })
    }
  }
}

module.exports = surferController