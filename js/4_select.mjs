import { connect, query } from './_database'

async function listData(){
  await connect()
  var result
  // Eventos
  result = await query("SELECT * FROM evento")
  console.log("EVENTOS:")
  console.log(result.rows);

  // Participantes
  result = await query("SELECT * FROM participante;")
  console.log("PARTICIPANTES:")
  console.log(result.rows);

  // Eventos e participantes
  result = await query("SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id")
  console.log("EVENTOS COM PARTICIPANTES:")
  console.log(result.rows);
}

listData()
