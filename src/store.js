import { createStore } from "vuex";

export default createStore({
     state () {
       return {
          clientStorage: [
               {
                    number: "812354567890",
                    name: "Антон",
                    points: 1212325,
                    totalAmount: 200,
                    purchaseHistory: [
                         {
                              date: "23.21.2222",
                              sum: 123,
                              typeOperationPoint: "SUB", // or "PLUS"
                              listPurchase: "Тюльпаны",
                         },
                    ]
               },
               {
                    number: "81234567890",
                    name: "Сергей",
                    points: 121,
                    totalAmount: 200,
                    purchaseHistory: [
                         {
                              date: "23.21.2222",
                              sum: 123,
                              typeOperationPoint: "SUB", // or "PLUS"
                              listPurchase: "Тюльпаны",
                         },
                         {
                              date: "13.21.2222",
                              sum: 12543,
                              typeOperationPoint: "SUB", // or "PLUS"
                              listPurchase: "Тюльпаны",
                         },
                    ]
               },
               {
                    number: "8123454567890",
                    name: "Игорь",
                    points: 123334,
                    totalAmount: 200,
                    purchaseHistory: [
                    ]
               },
          ],
       }
     },
     mutations: {
       
     }
})