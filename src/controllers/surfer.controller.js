const connection = require("../connection/db")
const surferController = {
  getAllSurfers: async (req, res) => {
    try {
      const query = "select * from Surfista"
      const [rows, fields] = await connection.query(query)
      console.log(rows)
      res.status(200).json({
        code: 200,
        message: "Todos os surfistas cadastrados retornados com sucesso",
        data: rows
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  },

  getSurferById: async (req, res) => {
    try {
      const { id } = req.params
      const query = `select * from Surfista where id = ${id}`
      const [rows, fields] = await connection.query(query)

      if (rows.length === 0) {
        res.status(400).json({
          code: 400,
          message: `Surfista ${id} não existe`,
          data: rows
        });
        return;
      }

      res.status(200).json({
        code: 200,
        message: `Surfista com id:${id} retornado com sucesso`,
        data: rows,
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  },

  getSurferByCountry: async (req, res) => {
    try {
      const { pais } = req.params
      const query = "SELECT * FROM Surfista WHERE pais = ?";
      const [rows, fields] = await connection.query(query, [pais])

      if(rows.length === 0) {
        res.status(400).json({
          code: 400,
          message: `Pais ${pais} não está relacionado a nenhum surfista`,
          data: rows
        });
        return;
      }

      res.status(200).json({
        code: 200,
        message: `Surfista do pais ${pais} retornado com sucesso`,
        data: rows,
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  },

  createNewSurfer: async (req, res) => {
    try {
      const { nome, pais } = req.body
      const sql = "insert into Surfista (nome, pais) values (?, ?)"
      const [rows, fields] = await connection.query(sql, [nome, pais])
      res.status(201).json({
        code: 201,
        message: 'Surfista criado com sucesso',
        data: rows
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  },

  updateSurfer: async (req, res) => {
    try {
      const { nome, pais } = req.body
      const { id } = req.params

      const sql = `select * from Surfista where id = ${id}`
      const [surfista] = await connection.query(sql)

      const query = `update Surfista set nome = ?, pais = ? where id = ${id}`
      const [rows, fields] = await connection.query(query, [nome, pais, id])

      if(surfista.length === 0) {
        res.status(400).json({
          code: 400,
          message: `Surfista id:${id} não está relacionado a nenhum surfista`,
          data: rows
        });
        return;
      }

      res.status(200).json({
        code: 200,
        message: `Surfista ${id} atualizado com sucesso`,
        data: rows
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  },

  deleteSurfer: async (req, res) => {
    try {
      const { id } = req.params

      const sql = `select * from Surfista where id = ${id}`
      const [surfista] = await connection.query(sql)

      if(surfista.length === 0) {
        res.status(400).json({
          code: 400,
          message: `Surfista id:${id} não está relacionado a nenhum surfista`,
          data: surfista
        });
        return;
      }

      const query = `delete from Surfista where id = ${id}`
      const [rows, fields] = await connection.query(query)
      res.status(200).json({
        code: 200,
        message: `Surfista ${id} deletado com sucesso`,
        data: rows
      })
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  }
}

module.exports = surferController