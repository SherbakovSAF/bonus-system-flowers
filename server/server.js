// -------- Подключеие библиотек
const http = require('http')
const url = require('url');
const querystring = require('querystring');

// Подключение модулей
const {getClients, addClient, deleteClient, updateClientInfo} = require('./actionDB')

http.createServer(server).listen(3000)

async function server(req, res) {
     res.setHeader('Content-Type', 'application/json')
     const urlParse = url.parse(req.url);
     const query = urlParse.query; // Параметры - всё что после ?
     const parsedQuery = querystring.parse(query) // Массив с параметрами
     
     let body = '';
     req.on('data', chunk => {
          body += chunk.toString()
     })
     switch(req.method){
          case 'GET':
               switch (urlParse.pathname) {
                    case '/api/clientState':
                         const resultQueryDB = await getClients(`phone_number LIKE '${parsedQuery.number}%'`)
                         res.end(JSON.stringify(resultQueryDB));
                         break
                    default:
                         res.end(JSON.stringify({statusCode: 404, message: 'Путь не был найден'}))
                  }
               break
          case 'POST':
               req.on('end', async () => {
                    try {
                         const resultQueryDB = await addClient(JSON.parse(body))
                         res.end(JSON.stringify(resultQueryDB));
                    } catch (error) {
                         res.end(JSON.stringify(error))
                    }
               })
               break;
          case 'DELETE':
               req.on('end', async () => {
                    try {
                         const response = await deleteClient(JSON.parse(body));
                         res.end(JSON.stringify({statusCode: 200,message: 'Пользователь удалён'}));
                    } catch (error) {
                         res.end(JSON.stringify({statusCode: 500,message: 'Пользователь не удалён'}));
                    }
               })
               break
          case 'PUT':
               req.on('end', async () => {
                    try {
                         const response = await updateClientInfo(JSON.parse(body));
                         res.end(JSON.stringify({statusCode: 200,message: 'Пользователь обновлён'}));
                    } catch (error) {
                         res.end(JSON.stringify({statusCode: 500,message: 'Пользователь не обвнолён'}));
                    }
               })
               break
          default:
               res.end(JSON.stringify({statusCode: 404, message: "Ваш метод запроса не верен"}))
     }
}