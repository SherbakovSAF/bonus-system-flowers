import { createStore } from "vuex";

export default createStore({
     state () {
       return {
          clientStorage: [],
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
          },
          setClientStorage(state, data){
               state.clientStorage = data
          }
          
     },
     actions: {
          async getClientStorageFromAPI({ commit }){
               const res = await fetch('http://localhost:3000/api/index.js')
               const data = await res.json()
               commit('setClientStorage', data)
          }
     }
     
})