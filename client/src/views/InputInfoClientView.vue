<template>
     <article 
          class="bg-card-bg w-1/2 rounded-r-full shadow-lg
          max-lg:w-2/3 max-sm:w-full">
          <div class="flex justify-between items-center">
               <div class="text-main-color-text px-8 py-7">
                    <h2 class="text-xl">{{ selectedClient.name ? selectedClient.name : "Имя нового клиента" }}</h2>
                    <h2 class="text-2xl">{{ selectedClient.phone_number ? selectedClient.phone_number : "Номер нового клиента"}}</h2>
               </div>
               <img 
               src="../assets/media/flower.png" alt="" 
               class="justify-end mr-6 h-[150px]
               max-[500px]:absolute left-full -translate-x-full">
          </div>
     </article>
     <div>
          <form class="py-4 flex justify-center">
               <main-input-UI v-model="selectedClient.name" type="text" :placeholder="placeholderName"/>
          </form>
          <form class="py-4 flex justify-center">
               <main-input-UI v-model="selectedClient.phone_number" type="tel" :placeholder="placeholderNumber" maxSize="16"/>
          </form>
     </div>
     <button @click="selectedButtonFunc" type="submit" class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
          max-sm:w-2/3">
          {{ textMainButton }}
     </button>
     
</template>

<script lang="ts">
import MainInputUI from '@/components/UI/MainInputUI.vue'
import PhoneMask from '@/utils/phoneMask'

import { defineComponent } from 'vue'
import { ClientInfo } from '@/interfaces'
export default defineComponent({
     name: "EditClientInfo",
     components: {MainInputUI},
     data() {
          return {
               placeholderName: "" as string,
               placeholderNumber: "" as string,
               clientName: "" as string,
               selectedClient: {} as ClientInfo,
               textMainButton: "Отправить" as string,
               selectedButtonFunc: ()=>{},
          }
     },
     methods: {
          validNumberInput(){
               if(this.formatNumber().length < 11){
                    this.$store.commit('activeModalInfo', {text: 'Количество цифр в номере должно быть минимум 10'})
                    return true
               }
               return false
          },
          validForEmptyValue(){
               if(!this.selectedClient.name || !this.selectedClient.phone_number){
                    this.$store.commit('activeModalInfo', {text: 'Поля имени клиента или номера - пусты'})
                    return true
               }
               return false
          },
          formatNumber() {
               if(this.selectedClient.phone_number[0] == "+"){
                    return "8" + this.selectedClient.phone_number.slice(2, this.selectedClient.phone_number.length)
               }

               if(this.selectedClient.phone_number[0] == "8" && this.selectedClient.phone_number.length <= 11){
                    return this.selectedClient.phone_number
               }

               return "8" + this.selectedClient.phone_number
          },
          
          addNewClient(){
               if(this.validForEmptyValue())return
               if(this.validNumberInput())return
               
               const newClientCard = {
                    number: new PhoneMask(this.selectedClient.phone_number).forDateBase(),
                    name: this.selectedClient.name,
               }
               // if(this.checkRepeatClientInfo())return
               try {
                    this.$store.dispatch("addClient", newClientCard)
                    this.$router.push('/')
                    
               } catch (error) {
                    alert('У Вас ошибка')
               }
          },     
          editClientInfo(){
               if(this.validNumberInput())return
               if(this.validForEmptyValue())return
               // if(this.checkRepeatClientInfo())return
               this.$store.commit('editClientInfo', {name: this.selectedClient.name, number: String(this.selectedClient.phone_number)})
               this.$router.push("/")
          },
     },
     computed: {
     },
     mounted() {
          switch (this.$route.params.typeInputInfo) {
               case "regNewClient":
                    this.selectedClient.phone_number = this.$store.state.newClientNumber
                    this.selectedClient.name = ""
                    this.placeholderName = 'Введите имя нового клиента',
                    this.placeholderNumber = 'Введите имя номер клиента',
                    this.$store.commit("clearNewClientNumber")
                    this.textMainButton = "Добавить"
                    this.selectedButtonFunc = this.addNewClient
                    break;
               case "editClientInfo":
                    this.selectedClient = Object.assign({}, this.$store.state.selectedClient)
                    this.textMainButton = "Изменить"
                    this.placeholderName = 'Введите новое имя клиента',
                    this.placeholderNumber = 'Введите новый номер клиента',
                    this.selectedButtonFunc = this.editClientInfo
                    break;
               default:
                    alert('Ошибка при переходе. Не найден подходящий шаблон для отрисовки')
                    this.$router.push({ path: '/'});
          }
          
     },

})
</script>
