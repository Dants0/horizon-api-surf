const connection = require("../connection/db")

const randomLocals = [
  {
    id: 1,
    local: "Ipanema"
  },
  {
    id: 2,
    local: "Malibu"
  }
]

function getRandomLocal(surfistas) {
  const randomIndex = Math.floor(Math.random() * randomLocals.length);
  const randomLocal = randomLocals[randomIndex].local;

  for (const surfista of surfistas) {
    surfista.local = randomLocal;
  }

  return randomLocal;
}


const batteryController = {

  createNewBattery: async (req, res) => {
    try {

      const [rows] = await connection.query("SELECT id, nome, pais FROM surfista");

      // let bateriaId = ''
      for (const i of rows) {
        const [resultadoBateria] = await connection.query('INSERT INTO bateria (surfista_nome, surfista_pais) VALUES (?,?)', [i.nome, i.pais]);
        bateriaId = resultadoBateria.insertId
      }

      // const [resultadoBateria] = await connection.query('INSERT INTO bateria (surfista_nome, surfista_pais) VALUES (?,?)', [i.nome, i.pais]);
      // bateriaId = resultadoBateria.insertId

      // for (const surfista of rows) {
      //   await connection.query('INSERT INTO onda (surfista_id, bateria_id) VALUES (?, ?)', [surfista.id, bateriaId]);
      // }

      res.json({
        message: 'Nova bateria criada com sucesso!',
        // bateriaId: bateriaId,
      });
    } catch (e) {
      console.log(e)
      res.json({
        error: "Error",
        status: '400',
      })
    }
  }

}

module.exports = batteryController