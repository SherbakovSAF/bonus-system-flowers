const {addClient} = require('./actionDB');

// const url = require('url');
// const querystring = require('querystring');

module.exports = async function post(req, res) {
  let body = '';
  req.on('data', chunk =>{
    body += chunk.toString()
  })
  req.on('end', () =>{
    return addClient(JSON.parse(body))
  })

  // const urlParse = url.parse(req.url)
  // const query = urlParse.query; // Параметры - всё что после ?
  // const parsedQuery = querystring.parse(query) // Массив с параметрами

  // switch (urlParse.pathname) {
  //   case '/api/addClient':
  //     try {
  //       const results = await addClient(``);
  //       res.end(JSON.stringify(results));
  //     } catch (error) {
  //       res.end(JSON.stringify({ name: 'Не получилось' }));
  //     }
  //     break;
  //   default:
  //     res.end(JSON.stringify({ name: 'Не получилось' }));
  // }
}

