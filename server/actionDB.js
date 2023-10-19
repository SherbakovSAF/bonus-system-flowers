const mysql = require('mysql2');
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


function deleteClient(clientID) {
  return new Promise((resolve, reject) => {
    try {
      const connection = mysql.createConnection(configDB);
      const query = `DELETE FROM clients WHERE id= ?`
      const params = [clientID]
      connection.query(query, params, (error, result) => {
        connection.end(); // Закрываем соединение
        error ? reject(error) : resolve(result)
      });
    } catch (error) {
      reject(error)
    }
  });
}

function updateClientInfo(clientInfo) {
  return new Promise((resolve, reject) => {
    try {
      const connection = mysql.createConnection(configDB);
      const query = `
      UPDATE clients
      SET phone_number= ?, name= ? 
      WHERE id= ?;`
      const {id, name, phone_number} = clientInfo
      const params = [phone_number, name, id ]
      connection.query(query, params, (error, result) => {
        connection.end(); // Закрываем соединение
        console.log(query, params)
        error ? reject(error) : resolve(result)
      });
    } catch (error) {
      reject(error)
    }
  });
}

module.exports = {
  getClients,
  addClient,
  deleteClient,
  updateClientInfo
};