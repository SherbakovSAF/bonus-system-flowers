// -------- Подключеие библиотек
const http = require('http')


// -------- Подключеие модулей
const get = require('./controllers/get')
const post = require('./controllers/post')
const deleteClient = require('./controllers/deleteMethods')


http.createServer(server).listen(3000)

async function server(req, res) {
     res.setHeader('Content-Type', 'application/json')
     switch (req.method) {
          case 'GET':
               const client = await get(req)
               res.end(JSON.stringify(client))
               break;
          case 'POST':
               try {
                    post(req)
               } catch (error) {
                    res.end(JSON.stringify({statusCode: 404, message: "Ваш запрос неудался запроса не верен"}))
               }
               break;
          case 'DELETE':
               try {
                    deleteClient(req)
               } catch (error) {
                    res.end(JSON.stringify({statusCode: 404, message: "Клиент не был удалён"}))
               }
               break;
          default:
               res.end(JSON.stringify({statusCode: 404, message: "Ваш метод запроса не верен"}))
     }
}