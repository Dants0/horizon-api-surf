const connection = require("../connection/db")

const notesController = {

  assignWaveNotes: async (req, res) => {
    try {
      const surfistaId = req.params.surfistaId;
  
      const [onda] = await connection.query("SELECT id, bateria_id FROM Onda ORDER BY id DESC LIMIT 1");
      const { id: ondaId, bateria_id: bateriaId } = onda[0];
  
      const [surfista] = await connection.query("SELECT nome FROM Surfista WHERE id = ?", [surfistaId]);
      if (surfista.length === 0) {
        res.status(400).json({
          code: 400,
          message: `Surfista ${surfistaId} não existe`,
          data: {surfista: surfista}
        });
        return;
      }
  
      const { nota1, nota2, nota3 } = req.body;
      const somaParcial = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
      const notaFinal = somaParcial / 3;
  
      await connection.query('INSERT INTO Nota (onda_id, nota1, nota2, nota3, notaFinal, surfista_id, surfista_nome) VALUES (?, ?, ?, ?, ?, ?, ?)', [bateriaId, nota1, nota2, nota3, notaFinal.toFixed(2), surfistaId, surfista[0].nome]);
  
      res.status(201).json({
        code: 201,
        message: 'Notas atribuídas com sucesso!',
        data: {
          ondaId: ondaId,
          surfistaId: surfistaId,
          surfistaNome: surfista[0].nome,
          nota1: nota1,
          nota2: nota2,
          nota3: nota3,
          notaFinal: notaFinal.toFixed(2),
        }
      });
    } catch (error) {
      const { code = 500, message = 'Internal Error', reasons = [] } = error
      res.status(500).json({ code, message, reasons })
    }
  }  
  
}

module.exports = notesController