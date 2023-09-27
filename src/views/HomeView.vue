<template>
     <main-loader v-if="isLoader || numberInput.length < countQueryClientCard"/>
     <div v-else>
          <div v-if="filterClientNumber.length">
               <client-card v-for="card in filterClientNumber" :key="card.id" :cardInfo="card"/>
          </div>
          <create-client-card v-else :newClientNumber="numberInput"/>
     </div>
     <form class="flex justify-center mt-5 ">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                         max-lg:w-1/2
                         max-sm:w-[90%]">
               <img src="@/assets/media/bouquetInput.svg" alt="ClientNumberInput" class="mr-3">
               <input class="outline-0 w-full font-medium text-[#686767] text-xl" 
                    maxlength="14" type="tel" 
                    placeholder="Введите номер гостя"
                    v-model="numberInput"
                    @input="executeRequest">
          </div>
     </form>
</template>


<script>
import ClientCard from '@/components/ClientCard.vue'
import CreateClientCard from '@/components/CreateClientCard.vue'
import MainLoader from '@/components/UI/MainLoader.vue'

export default {
     name: "HomeView",
     components: { ClientCard, CreateClientCard, MainLoader},
     data() {
          return {
               numberInput: "",
               isLoader: false,
               isClientsFound: false,
               countQueryClientCard: 5,
          }
     },
     methods: {
          async executeRequest(){
               if(this.displayBeforeRequest){
                    this.errorMessage = ''
                    try {
                         this.isLoader = true
                         await this.$store.dispatch('getClientStorageFromDB', this.numberInput)
                    } catch (error) {
                         this.errorMessage = error.message
                    } finally {
                         this.isLoader = false
                    }
               }
          }
     },
     computed: {
          displayBeforeRequest(){
               return this.numberInput.length === this.countQueryClientCard
          },
          filterClientNumber() {
               return this.displayBeforeRequest ? this.$store.state.clientStorage : []
               
               // Добавить маску

               // const firstValueTransValue = this.numberInput[0]
               // const templateSliceNumber = (sliceNumberInputLength, internationalFormatSlice) => {
               //      // Выносим шаблон. 
               //      return this.$store.state.clientStorage
               //      .filter(card => card.number.slice(1, sliceNumberInputLength) == this.numberInput.slice(internationalFormatSlice, this.numberInput.length))
               // }
               // if (firstValueTransValue == "+") {
               //      // Обрезается +7
               //      return templateSliceNumber(this.numberInput.length - 1, 2)
               // } 
               // if (firstValueTransValue == "8") {
               //      // Обрезается 8
               //      return templateSliceNumber(this.numberInput.length, 1)
               // } 
               
               // return templateSliceNumber(this.numberInput.length + 1, 0)
          },
     },
}
</script>