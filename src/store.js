import { createStore } from "vuex";

export default createStore({
     state () {
       return {
          clientStorage: [
               {
                    number: "89882321312312",
                    name: "Антон",
                    points: 0,
                    totalAmount: 0,
                    purchaseHistory: []
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
          },
          addNewPurchaseClient(state, newPurchase){
               const indexArrToAddPurchase = state.clientStorage.findIndex(e=> e.number === state.selectedClient.number)
               state.clientStorage[indexArrToAddPurchase].purchaseHistory.push(newPurchase)

               state.clientStorage[indexArrToAddPurchase].totalAmount += +newPurchase.sumPurchase
               state.clientStorage[indexArrToAddPurchase].points += +newPurchase.plusBonus

               if(newPurchase.typeOperationPoint == "SUB"){
                    state.clientStorage[indexArrToAddPurchase].points -= +newPurchase.subBonus
               }
          }
     }
})