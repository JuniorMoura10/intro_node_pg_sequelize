import { connect, query, end } from './_database'

async function insertData(){
  await connect()
  // Criar Eventos

  const queryEvento = "INSERT INTO evento (nome) VALUES ($1)"

  await query(queryEvento, ['Encontro de Nodejs'])
  await query(queryEvento, ['Encontro de Postgresql'])

  //Criar Participantes

  const queryParticipante = "INSERT INTO participante (nome) VALUES ($1)"

  await query(queryParticipante,['Carlos'])
  await query(queryParticipante, ['Augusto'])
  await query(queryParticipante,['Janaína'])
  await query(queryParticipante,['Rafael'])

  // Adicionar participantes do evento Nodejs

  const queryEventoParticipante = "INSERT INTO evento_participante (evento_id,participante_id) VALUES ($1, $2)"

  await query(queryEventoParticipante, [1, 1])
  await query(queryEventoParticipante, [1, 2])
  await query(queryEventoParticipante, [1, 3])

  // Adicionar participantes do evento Postgresql

  await query(queryEventoParticipante, [2, 3])
  await query(queryEventoParticipante, [2, 4])

  await end()

  console.log("Dados Inseridos");
}

insertData()
