const { addClient } = require('./actionDB');

module.exports = function post(req) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', async () => {
    try {
      addClient(JSON.parse(body));
    } catch (error) {
      throw new Error(error)
    }
  })
}

