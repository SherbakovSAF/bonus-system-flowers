// -------- Подключеие библиотек
const http = require('http')


// -------- Подключеие модулей
const get = require('./get')
const post = require('./post')


http.createServer(server).listen(3000)

function server(req, res) {
     res.setHeader('Content-Type', 'application/json')
     switch (req.method) {
          case 'GET':
               get(req, res)
               res.end(JSON.stringify({statusCode: 200, message: "Запрос GET отправлен"}))
               break;
          case 'POST':
               const result = post(req, res)
               res.end(JSON.stringify({statusCode: 200, message: result}))
          
               break;
          default:
               res.end(JSON.stringify({statusCode: 404, message: "Ваш метод запроса не верен"}))
     }
}