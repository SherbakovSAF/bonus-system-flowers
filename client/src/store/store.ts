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
          // Сделать через emit
          selectClient(state, selectClient) {
               state.selectedClient = selectClient
          },
          // Сделать через emit
          saveEnterNumber(state, newClientNumberForSearchClient) {
               state.newClientNumber = newClientNumberForSearchClient
          },
          // Если убрать saveEnter, то и это уберётся
          clearNewClientNumber(state){
               state.newClientNumber = ''
          },
          // Тоже самое
          clearSelectedClient(state){
               state.selectedClient = {}
          },
          // async addNewClient(state, newClientInfo){
               
          // },
          // addNewPurchaseClient(state, newPurchase){
          //      const indexArrToAddPurchase = state.clientStorage.findIndex(e=> e.number === state.selectedClient.number)
          //      state.clientStorage[indexArrToAddPurchase].purchaseHistory.unshift(newPurchase)

          //      state.clientStorage[indexArrToAddPurchase].totalAmount += +newPurchase.sumPurchase
          //      state.clientStorage[indexArrToAddPurchase].points += +newPurchase.plusBonus

          //      if(newPurchase.typeOperationPoint == "SUB"){
          //           state.clientStorage[indexArrToAddPurchase].points -= +newPurchase.subBonus
          //      }
          // },
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
          // editClientInfo(state, clientInfo){
          //      const indexEditClient = state.clientStorage.findIndex(e => e == state.selectedClient)
          //      state.clientStorage[indexEditClient].number = clientInfo.number
          //      state.clientStorage[indexEditClient].name = clientInfo.name
          // },
          setClientStorage(state, data){
               state.clientStorage = data
          }
          
     },
     actions: {
          // Запихнуть это в мутации и обновлять компонент mapState или другим функционалом
          async getClientStorageFromDB({ commit }, number){
                    const respone = await fetch(`/api/clientState?number=${number}`);
                    const data = await respone.json();
                    commit('setClientStorage', data)
                    if(!data.length) throw new Error('Данные не были найдены')
          },
          async addClient(context, newClientCard){
               if(!newClientCard) throw new Error('Данные клиента не были переданы')

               try {
                    fetch('/api/newClient', {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json;charset=utf-8'
                         },
                         body: JSON.stringify(newClientCard)
                    })
               } catch (error) {
                    throw new Error('Пользователь не добавлен')
               }

          },
          async deleteClient(context, clientID){
               if(!clientID) throw new Error('ID клиента не получено')
               try {
                    fetch('/api/deleteClient', {
                         method: 'DELETE',
                         headers: {
                              'Content-Type': 'application/json;charset=utf-8'
                         },
                         body: JSON.stringify(clientID)
                    })
               } catch (error) {
                     throw new Error('Пользователь не удалён')
               }
          }
     }
     
})