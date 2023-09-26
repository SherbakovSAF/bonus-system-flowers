const { getClients } = require('./actionDB');

const url = require('url');
const querystring = require('querystring');

module.exports = async function get(req) {
  const urlParse = url.parse(req.url)
  const query = urlParse.query; // Параметры - всё что после ?
  const parsedQuery = querystring.parse(query) // Массив с параметрами

  switch (urlParse.pathname) {
    case '/api/clientState':
      return getClients(`phone_number LIKE '${parsedQuery.number}%'`);
    default:
      return (JSON.stringify([]));
  }
}

