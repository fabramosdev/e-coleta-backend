import express from 'express'
import routes from'./routes'


const app = express()
app.use(express.json())

/**
 * Rota: Endereço completoda requisição
 * Recurso: Qual entidade estamos acessando do sistema
 * 
 * Métodos HTTP:
 * 
 * GET: Buscar uma ou mais informações do backend
 * POST: Criar uma nova informação no backend
 * PUT: Atualizar uma ou mais informações no backend
 * DELETE: Excluir/Remover informação do backend
 * 
 * Tipos de parametros:
 * 
 * Request Param: Parametros que vem na propria rota que identificam um recurso [request.params]
 * Query Param: Parametros que vem na propria rota geraelmente opcionais para filtros, paginação e etc... [request.query]
 * Request Body: Parametros para criacao e atualizacao de informacoes [request.body]
 */

app.use(routes)
app.listen(3333)