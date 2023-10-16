<template>
          <div>
               <main-loader-UI v-if="isLoader || useMaskPhone.length < countQueryClientCard"/>
               <div v-else>
                    <!-- if и for вместе не рекомендуется использовать -->
                    <div v-if="filterClientNumber.length">
                         <client-card v-for="card in filterClientNumber" :key="card.id" :cardInfo="card"/>
                    </div>
                    <create-client-card v-else :newClientNumber="numberInput"/>
               </div>
               <form class="flex justify-center mt-5 ">
                    <main-input-UI v-model="numberInput" type="tel" maxSize="16"/>
               </form>
          </div>
</template>


<script lang="ts">
// Компоненты проекта
import ClientCard from '@/components/ClientCard.vue'
import CreateClientCard from '@/components/CreateClientCard.vue'
import MainLoaderUI from '@/components/UI/MainLoaderUI.vue'
import MainInputUI from '@/components/UI/MainInputUI.vue'

// Утилиты
import PhoneMask from '@/utils/phoneMask';

// Типизиация
import { defineComponent } from 'vue';
import type {ClientInfo} from '@/interfaces'

export default defineComponent({
     name: "HomeView",
     components: { ClientCard, CreateClientCard, MainLoaderUI, MainInputUI},
     data() {
          return {
               numberInput: '' as string,
               isLoader: false as boolean,
               isClientsFound: false as boolean,
               countQueryClientCard: 7 as number,
          }
     },
     methods: {
          async executeRequest(): Promise<void>{
               try {
                    this.isLoader = true
                    await this.$store.dispatch('getClientStorageFromDB', this.useMaskPhone)
               } catch (error) {
                    alert('Получение клиентов не удалось')
               } finally {
                    this.isLoader = false
               }
          }
     },
     computed: {
          displayBeforeRequest():boolean{
               return this.useMaskPhone.length === this.countQueryClientCard
          },
          filterClientNumber():Array<ClientInfo> {
               return this.$store.state.clientStorage.filter((e: ClientInfo)=> e.phone_number.startsWith(this.useMaskPhone))
          },
          useMaskPhone():string{
               return new PhoneMask(this.numberInput).forDateBase()
          },
     },
     watch: {
          numberInput() {
               if(this.displayBeforeRequest) this.executeRequest()
          }
     }
}
)
</script>