const connection = require("../connection/db")

const notesController = {

  assignWaveNotes: async (req, res) => {
    try {
      const surfistaId = req.params.surfistaId;
  
      const [onda] = await connection.query("SELECT id, bateria_id FROM onda ORDER BY id DESC LIMIT 1");
      const { id: ondaId, bateria_id: bateriaId } = onda[0];
  
      const [surfista] = await connection.query("SELECT nome FROM surfista WHERE id = ?", [surfistaId]);
      if (!surfista) {
        res.json({
          error: "Surfista não encontrado",
          status: '404',
        });
        return;
      }
  
      const { nota1, nota2, nota3 } = req.body;
      const somaParcial = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
      const notaFinal = somaParcial / 3;
  
      await connection.query('INSERT INTO nota (onda_id, nota1, nota2, nota3, notaFinal, surfista_id, surfista_nome) VALUES (?, ?, ?, ?, ?, ?, ?)', [bateriaId, nota1, nota2, nota3, notaFinal.toFixed(2), surfistaId, surfista[0].nome]);
  
      res.json({
        message: 'Notas atribuídas com sucesso!',
        ondaId: ondaId,
        surfistaId: surfistaId,
        surfistaNome: surfista[0].nome,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        notaFinal: notaFinal.toFixed(2),
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

module.exports = notesController