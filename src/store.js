import { createStore } from "vuex";

export default createStore({
     state () {
       return {
          clientStorage: [
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
          ],
          selectedClient: {},
          newClientNumber: "",
          modalInfo: {
               isActive: false,
               text: "Текст",
               type: 'alert',
               callBack: null
          }
       }
     },
     getters: {
          getModalCallback: state => state.modalInfo.callBack
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
          clearSelectedClient(state){
               state.selectedClient = null
          },
          addNewClient(state, newClientInfo){
               state.clientStorage.unshift(newClientInfo)
          },
          addNewPurchaseClient(state, newPurchase){
               const indexArrToAddPurchase = state.clientStorage.findIndex(e=> e.number === state.selectedClient.number)
               state.clientStorage[indexArrToAddPurchase].purchaseHistory.unshift(newPurchase)

               state.clientStorage[indexArrToAddPurchase].totalAmount += +newPurchase.sumPurchase
               state.clientStorage[indexArrToAddPurchase].points += +newPurchase.plusBonus

               if(newPurchase.typeOperationPoint == "SUB"){
                    state.clientStorage[indexArrToAddPurchase].points -= +newPurchase.subBonus
               }
          },
          closeModalInfo(state){
               state.modalInfo.isActive = false
          },
          activeModalInfo(state, props){    
               state.modalInfo.callBack = null
               state.modalInfo.text = props.text
               switch (props.type){
                    case "confirm":
                         state.modalInfo.type = 'confirm'
                         break
                    default:
                         state.modalInfo.type = 'alert'    
               }

               state.modalInfo.isActive = true
          },
          deleteClientInfo(state, clientInfo){
               state.clientStorage = state.clientStorage.filter(e => e != clientInfo)
          },
          selectedTypeModalInfo(state, callBackResult){
               state.modalInfo.callBack = callBackResult
          },
          editClientInfo(state, clientInfo){
               const indexEditClient = state.clientStorage.findIndex(e => e == state.selectedClient)
               state.clientStorage[indexEditClient].number = clientInfo.number
               state.clientStorage[indexEditClient].name = clientInfo.name
          }
     },
     
})