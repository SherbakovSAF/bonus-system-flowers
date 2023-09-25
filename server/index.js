// -------- Подключеие библиотек
const http = require('http')


// -------- Подключеие модулей
const get = require('./get')


http.createServer(server).listen(3000)

function server(req, res) {
     res.setHeader('Content-Type', 'application/json')
     if (req.method === 'GET') {
      get(req, res)
     }
}