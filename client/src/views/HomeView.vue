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


<script>
import ClientCard from '@/components/ClientCard.vue'
import CreateClientCard from '@/components/CreateClientCard.vue'
import MainLoaderUI from '@/components/UI/MainLoaderUI.vue'
import MainInputUI from '@/components/UI/MainInputUI.vue'

import PhoneMask from '@/utils/phoneMask';
export default {
     name: "HomeView",
     components: { ClientCard, CreateClientCard, MainLoaderUI, MainInputUI},
     data() {
          return {
               numberInput: '',
               isLoader: false,
               isClientsFound: false,
               countQueryClientCard: 7,
          }
     },
     methods: {
          async executeRequest(){
               this.errorMessage = ''
               try {
                    this.isLoader = true
                    await this.$store.dispatch('getClientStorageFromDB', this.useMaskPhone)
                    
               } catch (error) {
                    this.errorMessage = error.message
               } finally {
                    this.isLoader = false
               }
          }
     },
     computed: {
          displayBeforeRequest(){
               return this.useMaskPhone.length === this.countQueryClientCard
          },
          filterClientNumber() {
               return this.$store.state.clientStorage.filter(e=> e.phone_number.startsWith(this.useMaskPhone))
          },
          useMaskPhone(){
               return new PhoneMask(this.numberInput).forDateBase()
          },
     },
     watch: {
          numberInput() {
               if(this.displayBeforeRequest) this.executeRequest()
          }
     }
}
</script>