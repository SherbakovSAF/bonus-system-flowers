<template>
     <main-loader v-if="isLoader"/>
     <div v-else>
          <!-- v-if="filterClientNumber.length" -->
          <!-- v-else -->
          <div >
               <client-card v-for="card in filterClientNumber" :key="card.id"
               :cardInfo="card"/>
          </div>
          <new-client-card  :newClientNumber="numberInput"/>
     </div>
     <form class="flex justify-center mt-5 ">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                         max-lg:w-1/2
                         max-sm:w-[90%]">
               <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
               <input class="outline-0 w-full font-medium text-[#686767] text-xl" 
                    maxlength="14" type="tel" 
                    placeholder="Введите номер гостя"
                    v-model="numberInput"
                    @input="executeReq">
          </div>
     </form>
</template>


<script>
import ClientCard from './MainWindow-ClientCard.vue'
import NewClientCard from './MainWindow-NewClientCard.vue'
import MainLoader from '@/components/UI/MainLoader.vue'

export default {
     name: "MainWindow",
     components: {
          ClientCard,
          NewClientCard,
          MainLoader
     },
     data() {
          return {
               numberInput: "",
               isLoader: false
          }
     },
     methods: {
          async executeReq(){
               if(this.numberInput.length === 5){
                    this.isLoader = true
                    await this.$store.dispatch('getClientStorageFromDB', this.numberInput)
                    this.isLoader = false
               }
          }
     },
     computed: {
          filterClientNumber() {
               return this.$store.state.clientStorage

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