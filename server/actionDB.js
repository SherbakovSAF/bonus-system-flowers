const mysql = require('mysql');
const configDB = require('./configDB');

function getClients(condition) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(configDB);
    const query = `SELECT * FROM clients WHERE ${condition}`;

    connection.query(query, (error, result) => {
      connection.end(); // Закрываем соединение
      error ? reject(error) : resolve(result)
    });
  });
}

function addClient(newClientInfo) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(configDB);
    const { number, name } = newClientInfo
    const query = `
    INSERT INTO clients(phone_number, name, reg_date)
    VALUES ('${number}', '${name}', ${Date.now()})
    `;

    connection.query(query, (error, result) => {
      connection.end(); // Закрываем соединение
      error ? reject(error) : resolve(result)
    });
  });
}

module.exports = {
  getClients,
  addClient,
};