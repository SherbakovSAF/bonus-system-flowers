const mysql = require('mysql');
const configDB = require('./configDB');

function getClients(condition) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(configDB);
    const query = `SELECT * FROM clients WHERE ${condition}`;
    
    connection.query(query, (error, results) => {
     console.log(query)
      connection.end(); // Закрываем соединение
      
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function addClient(newClientInfo){
  
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(configDB);
    const {number, name} = newClientInfo
    console.log(newClientInfo['number'])
    const query = `
    INSERT INTO clients(phone_number, name, reg_date)
    VALUES ('${number}', '${name}', ${Date.now()})
    `;
    
    connection.query(query, (error, results) => {
      connection.end(); // Закрываем соединение
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getClients,
  addClient,
};