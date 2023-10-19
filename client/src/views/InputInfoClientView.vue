<template>
     <article 
          class="bg-card-bg w-1/2 rounded-r-full shadow-lg
          max-lg:w-2/3 max-sm:w-full">
          <div class="flex justify-between items-center">
               <div class="text-main-color-text px-8 py-7">
                    <h2 class="text-xl">{{ clientName ?? "Имя клиента" }}</h2>
                    <h2 class="text-2xl">{{ clientPhone ?? "Номер клиента"}}</h2>
               </div>
               <img 
               src="../assets/media/flower.png" alt="" 
               class="justify-end mr-6 h-[150px]
               max-[500px]:absolute left-full -translate-x-full">
          </div>
     </article>
     <div>
          <form class="py-4 flex justify-center">
               <main-input-UI v-model="clientName" type="text" :placeholder="placeholderName"/>
          </form>
          <form class="py-4 flex justify-center">
               <main-input-UI v-model="clientPhone" type="tel" :placeholder="placeholderNumber" maxSize="16"/>
          </form>
     </div>
     <button @click="selectedButtonFunc" type="submit" class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
          max-sm:w-2/3">
          {{ textMainButton }}
     </button>
     
</template>

<script lang="ts">
// Компоненты
import MainInputUI from '@/components/UI/MainInputUI.vue'

// Утилиты
import PhoneMask from '@/utils/phoneMask'

// Типизация
import { defineComponent } from 'vue'

export default defineComponent({
     name: "EditClientInfo",
     components: {MainInputUI},
     data() {
          return {
               placeholderName: "" as string,
               placeholderNumber: "" as string,
               clientName: "" as string,
               clientPhone: "" as string,
               textMainButton: "Отправить" as string,
               selectedButtonFunc: ()=>{},
          }
     },
     methods: {
          addNewClient(){     
               const newClientCard = {
                    number: new PhoneMask(this.clientPhone).forDateBase(),
                    name: this.clientName ?? 'Имя отсутвует',
               }
               try {
                    this.$store.dispatch("addClient", newClientCard)
                    this.$router.push('/')
                    
               } catch (error) {
                    alert('У Вас ошибка')
               }
          },     
          editClientInfo(){
               
               try {
                    const localClient = Object.assign(this.$store.state.selectedClient)
                    localClient.name = this.clientName
                    localClient.phone_number = new PhoneMask(this.clientPhone).forDateBase()
                    this.$store.dispatch("updateClientInfo", localClient)
                    this.$router.push('/')
                    
               } catch (error) {
                    alert('У Вас ошибка')
               }
               this.$router.push({ path: '/'});
          },
          setTemplateView(placeholderName:string, placeholderNumber:string, textBtn:string, typeFunction: ()=>void){
               this.placeholderName = placeholderName,
               this.placeholderNumber = placeholderNumber,
               this.textMainButton = textBtn
               if(this.$store.state.selectedClient) {
                    this.clientPhone = this.$store.state.selectedClient.phone_number ?? this.$store.state.selectedClient
                    this.clientName = this.$store.state.selectedClient.name
               }
               this.selectedButtonFunc = typeFunction
          }
     },
     computed: {
          formatedNumber(){
               return new PhoneMask(this.clientPhone).forView()
          }
    },
     mounted() {
          switch (this.$route.params.typeInputInfo) {
               case 'regNewClient':
                    this.setTemplateView('Введите имя нового клиента', 'Введите номер нового клиента', 'Добавить', this.addNewClient)
                    break;
               case 'editClientInfo':
                    this.setTemplateView('Введите новое имя клиента', 'Введите новый номер клиента', 'Изменить', this.editClientInfo)
                    break;
               default:
                    alert('Ошибка при переходе. Не найден подходящий шаблон для отрисовки')
                    this.$router.push({ path: '/'});
          }
     },

})
</script>
