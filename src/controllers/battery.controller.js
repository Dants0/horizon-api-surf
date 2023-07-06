const connection = require("../connection/db")

const batteryController = {

  createNewBattery: async (req, res) => {
    try {

      const [rows] = await connection.query("SELECT id, nome, pais FROM surfista");

      let bateriaId = ''
      for (const i of rows) {
        const [resultadoBateria] = await connection.query('INSERT INTO bateria (surfista_nome, surfista_pais) VALUES (?,?)', [i.nome, i.pais]);
        bateriaId = resultadoBateria.insertId
      }




      res.status(201).json({
        code: 201,
        message: 'Nova bateria criada com sucesso!',
        data: {bateriaId: bateriaId}
      });
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  },

  getWinnerSurfer: async (req, res) => {
    try {

      const { id } = req.params;
      const query = `SELECT surfista_id, surfista_nome, SUM(notaFinal) as somatorio
      FROM nota
      WHERE onda_id = ${id}
      GROUP BY surfista_id, surfista_nome
      ORDER BY somatorio DESC
      LIMIT 1;`;

      const [rows, fields] = await connection.query(query);
      console.log(rows)

      const winner = rows[0];

      if (rows.length === 0) {
        return res
          .status(400)
          .json({ code: 400, message: `Onda da bateria ${id} não encontrado` })
      }

      res.status(200).json({
        code: 200,
        message: `O vencedor da bateria ${id} foi ${winner.surfista_nome}`,
        data: winner
      });
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  }

}

module.exports = batteryController