<template>
     <div>
          <main-loader v-if="isLoader"/>
          <div v-else>
               <client-card v-for="card in filterClientNumber" :key="card.id"
               :cardInfo="card"/>
               <new-client-card :newClientNumber="numberInput"/>
          </div>
          
     </div>

     <form class="flex justify-center mt-5 ">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                         max-lg:w-1/2
                         max-sm:w-[90%]">
               <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
               <input class="outline-0 w-full font-medium text-[#686767] text-xl
                              " maxlength="14" type="tel" placeholder="Введите номер гостя" v-model="numberInput">
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
          async getClient(){
               this.isLoader = true
               this.$store.dispatch('getClientStorageFromAPI')
               this.isLoader = false
          }
     },
     computed: {
          filterClientNumber() {
               const firstValueTransValue = this.numberInput.slice(0, 1)
               const templateSliceNumber = (sliceNumberInputLength, internationalFormatSlice) => {
                    // Выносим шаблон. 
                    return this.$store.state.clientStorage
                    .filter(card => card.number.slice(1, sliceNumberInputLength) == this.numberInput.slice(internationalFormatSlice, this.numberInput.length))
               }
               if (firstValueTransValue == "+") {
                    // Обрезается +7
                    return templateSliceNumber(this.numberInput.length - 1, 2)
               } else if (firstValueTransValue == "8") {
                    // Обрезается 8
                    return templateSliceNumber(this.numberInput.length, 1)
               } else {
                    return templateSliceNumber(this.numberInput.length + 1, 0)
               }

               
          }
          // filterClientNumber() {
          //      const firstValueTransValue = this.numberInput[0];
          //      const sliceNumberInputLength = this.numberInput.length - (firstValueTransValue === "+" ? 1 : 0);

          //      return this.$store.state.clientStorage
          //      .filter(card => {
          //           card.number.slice(1, sliceNumberInputLength) === this.numberInput.slice(firstValueTransValue === "+" ? 2 : 1, this.numberInput.length)
          //      });
          // }
     },
     mounted() {
          this.getClient()
     }
}
</script>