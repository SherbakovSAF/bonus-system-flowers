const {getClients} = require('./actionDB');

const url = require('url');
const querystring = require('querystring');

module.exports = async function get(req, res){
     const urlParse = url.parse(req.url)
     const query = urlParse.query; // Параметры - всё что после ?
     const parsedQuery = querystring.parse(query) // Массив с параметрами

     switch (urlParse.pathname) {
    case '/api/clientState':
      try {
        const results = await getClients(`phone_number LIKE '${parsedQuery.number}%'`);
        res.end(JSON.stringify(results));
      } catch (error) {
        res.end(JSON.stringify({ name: 'Не получилось' }));
      }
      break;
    default:
      res.end(JSON.stringify({ name: 'Не получилось' }));
  }
}

