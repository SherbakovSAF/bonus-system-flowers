import { createStore } from "vuex";

import type { ClientInfo } from "@/interfaces";
import {ActionContext} from 'vuex'
import type { StateType, RootState } from "./store-interface";

export default createStore({
     state () {
       return {
          clientStorage: [],
          selectedClient: {},
       }
     },
     mutations: {
          // Сделать через emit
          selectClient(state, selectClient) {
               state.selectedClient = selectClient
          },
          // addNewPurchaseClient(state, newPurchase){
          //      const indexArrToAddPurchase = state.clientStorage.findIndex(e=> e.number === state.selectedClient.number)
          //      state.clientStorage[indexArrToAddPurchase].purchaseHistory.unshift(newPurchase)

          //      state.clientStorage[indexArrToAddPurchase].totalAmount += +newPurchase.sumPurchase
          //      state.clientStorage[indexArrToAddPurchase].points += +newPurchase.plusBonus

          //      if(newPurchase.typeOperationPoint == "SUB"){
          //           state.clientStorage[indexArrToAddPurchase].points -= +newPurchase.subBonus
          //      }
          // },     
          deleteClientInfo(state, idClientDeleted){
               state.clientStorage = state.clientStorage.filter((e:ClientInfo) => e.id != idClientDeleted)
          },
          setClientStorage(state, data){
               state.clientStorage = data
          }
          
     },
     actions: {
          async getClientStorageFromDB({ commit }, number){
                    try {
                         const respone = await fetch(`/api/clientState?number=${number}`);
                         const data = await respone.json();
                         commit('setClientStorage', data)
                    } catch (error) {
                         throw new Error('Данные не были найдены')
                    }
                    
          },
          async addClient(context: ActionContext<StateType, RootState>, newClientCard: ClientInfo){
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
          async deleteClient(context: ActionContext<StateType, RootState>, clientID: number): Promise<void>{
               if(!clientID) throw new Error('ID клиента не получено')
               try {
                    const response = await fetch('/api/deleteClient', {
                         method: 'DELETE',
                         headers: {
                              'Content-Type': 'application/json;charset=utf-8'
                         },
                         body: JSON.stringify(clientID)
                    })
                    const result = await response.json()
                    if(result.statusCode !== 200) {
                         throw new Error('Пользователь не удалён') 
                    } else {
                         context.commit('deleteClientInfo', clientID);
                    }
               } catch (error) {
                    throw new Error('Пользователь не удалён. Ошибка запроса к серверу'); 
               }
          },
          async updateClientInfo(context: ActionContext<StateType, RootState>, updatedInfo): Promise<void>{
               if(!updatedInfo) throw new Error('Информация о клиенте неверная')
               try {
                    const response = await fetch('/api/updateClient', {
                         method: 'PUT',
                         headers: {
                              'Content-Type': 'application/json;charset=utf-8'
                         },
                         body: JSON.stringify(updatedInfo)
                    })
                    const result = await response.json()
                    if(result.statusCode !== 200) {
                         throw new Error('Информация не обновлена') 
                    }
               } catch (error) {
                    throw new Error('Пользователь не обновлён. Ошибка запроса к серверу'); 
               }
          }
     }
     
})