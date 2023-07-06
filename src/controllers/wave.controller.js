const connection = require("../connection/db")

const waveController = {

  createNewWave: async (req, res) => {
    try {
      const [bateria] = await connection.query("SELECT id FROM Bateria ORDER BY id DESC LIMIT 1");
      const [surfistas] = await connection.query("SELECT id, nome FROM Surfista");
  
      if(bateria.length === 0 || surfistas.length === 0){
        res.status(400).json({
          code: 400,
          message: `Bateria não encontrada. Não foi possível criar uma nova onda!`,
          data: {
            bateria: bateria,
            surfistas: surfistas
          }
        });
        return;
      }

      const bateriaId = bateria[0].id;
  
      for (const surfista of surfistas) {
        await connection.query('INSERT INTO Onda (bateria_id, surfista_id) VALUES (?, ?)', [bateriaId, surfista.id]);
      }
  
      res.status(201).json({
        code: 201,
        message: 'Nova onda criada com sucesso!',
        data: {
          bateriaId: bateriaId,
          surfistas: surfistas.map(surfista => surfista.nome),
        }
      });
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  }
  

}

module.exports = waveController