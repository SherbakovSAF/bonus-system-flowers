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

module.exports = {
  getClients
};

// function getClients(){
//   const connection = mysql.createConnection(configDB)
//   const date = +Date.now()
//   console.log(typeof date)
//   connection.connect()
//   const query = `
//   INSERT INTO purchases(client_id, purchase_date, sum_purchase, operation_type,	sub_bonus,	list_purchase,	salesman)
//   VALUES (4, ${date}, 2000, 'SUB', 100, 'Цветы большие, Ромашки', 'Таня')
//   `
//   // const query = `
//   // INSERT INTO purchases(phone_number,name,reg_date)
//   // VALUES ('8432', 'Соха', ${date})
//   // `

//   connection.query(query, (error, res)=> {
//     if(error){
//       console.log('Ошибка' + error)
//     } else {
//       console.log(res)
//     }
//   })
//   connection.end()
// }

// connect()


