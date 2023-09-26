const { deleteClient } = require('./actionDB');

module.exports = function deleteMethod(req){
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', async () => {
    try {
      deleteClient(JSON.parse(body));
    } catch (error) {
      throw new Error(error)
    }
  })
}

