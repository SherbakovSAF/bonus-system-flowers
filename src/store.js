import { createStore } from "vuex";

export default createStore({
     state () {
       return {
          clientStorage: [
               {
                    number: "89882321312312",
                    name: "Антон",
                    points: 1212325,
                    totalAmount: 200,
                    purchaseHistory: [
                         {
                              date: "23.21.2222",
                              sumPurchase: 123,
                              typeOperationPoint: "SUB", // or "PLUS"
                              subBonus: 20,
                              plusBonus: 0,
                              listPurchase: "Тюльпаны",
                         },
                    ]
               },
               {
                    number: "891812343554",
                    name: "Сергей",
                    points: 1212325,
                    totalAmount: 200,
                    purchaseHistory: [
                    ]
               },
               {
                    number: "8928125312",
                    name: "Игорь",
                    points: 1212325,
                    totalAmount: 200,
                    purchaseHistory: [
                         {
                              date: "23.21.2222",
                              sumPurchase: 123,
                              typeOperationPoint: "SUB", // or "PLUS"
                              subBonus: 20,
                              plusBonus: 0,
                              listPurchase: "Тюльпаны",
                         },
                         {
                              date: "23.21.2222",
                              sumPurchase: 123,
                              typeOperationPoint: "PLUS", // or "PLUS"
                              subBonus: 20,
                              plusBonus: 0,
                              listPurchase: "Тюльпаны",
                         },
                         {
                              date: "23.21.2222",
                              sumPurchase: 123,
                              typeOperationPoint: "SUB", // or "PLUS"
                              subBonus: 20,
                              plusBonus: 0,
                              listPurchase: "Тюльпаны",
                         },
                    ]
               },
          ],
          selectedClient: {},
          newClientNumber: ""
       }
     },
     mutations: {
          selectClient(state, selectClient) {
               state.selectedClient = selectClient
          },
          saveEnterNumber(state, newClientNumberForSearchClient) {
               state.newClientNumber = newClientNumberForSearchClient
          },
          clearNewClientNumber(state){
               state.newClientNumber = ''
          },
          addNewClient(state, newClientInfo){
               state.clientStorage.unshift(newClientInfo)
               console.log(state.clientStorage)
          }
     }
})