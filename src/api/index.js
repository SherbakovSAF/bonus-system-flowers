var express = require('express');
var app = express();
const path = require('path')

const clientStorage = [
     {
          number: "89881234567",
          name: "Антон",
          points: 0,
          totalAmount: 0,
          purchaseHistory: [
               // Шаблон покупки для clientStorage
               // date: formatData,
               // sumPurchase: this.addNewPurchase.sumPurchase,
               // typeOperationPoint: this.addNewPurchase.typeOperationPoint, // or "PLUS"
               // subBonus: this.addNewPurchase.subBonus,
               // plusBonus: (this.addNewPurchase.sumPurchase * 0.1).toFixed(2),
               // listPurchase: !this.addNewPurchase.listPurchase ? "-" : this.addNewPurchase.listPurchase,
               // salesman: this.addNewPurchase.salesman     
          ]
     },
     {
          number: "891812343554",
          name: "Сергей",
          points: 0,
          totalAmount: 0,
          purchaseHistory: []
     },
     {
          number: "8928125312",
          name: "Игорь",
          points: 0,
          totalAmount: 0,
          purchaseHistory: []
     },
]




app.use(function (req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
     next();
});

app.get('/api/index.js', function (req, res) {

     res.status(200).json(clientStorage)
     
});


app.listen(3000, () => console.log('Server has been started on port ...'))