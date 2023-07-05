const connection = require("../connection/db")

const waveController = {

  createNewWave: async (req, res) => {
    try {
      const [bateria] = await connection.query("SELECT id FROM bateria ORDER BY id DESC LIMIT 1");
      const [surfistas] = await connection.query("SELECT id, nome FROM surfista");
  
      const bateriaId = bateria[0].id;
  
      for (const surfista of surfistas) {
        await connection.query('INSERT INTO onda (bateria_id, surfista_id) VALUES (?, ?)', [bateriaId, surfista.id]);
      }
  
      res.json({
        message: 'Nova onda criada com sucesso!',
        bateriaId: bateriaId,
        surfistas: surfistas.map(surfista => surfista.nome),
      });
    } catch (e) {
      console.log(e);
      res.json({
        error: "Error",
        status: '400',
      });
    }
  }
  

}

module.exports = waveController