<template>
     <div>
          <div>
               <main-window-card v-for="card in filterClientNumber" :key="card.id"
                    :cardInfo="card"/>
          </div>
          <div v-if="filterClientNumber.length === 0">
               <article class="bg-[#FBDCD7] w-1/2 rounded-r-full  shadow-lg mt-6
                              max-md:w-2/3 max-sm:w-full">
                    <router-link to="clientinfo/regnewclient"
                         @click="saveEnterNumber" 
                         class="flex justify-between items-center
                         max-[430px]:relative">
                         <div class="text-[#686767] px-8 py-7">
                              <div class="person__main__block">
                                   <h2 class="text-xl">Клиент не найден</h2>
                                   <h1 class="text-2xl">Добавить карточку с номером<br>
                                        <span class="text-3xl font-semibold">{{ numberInput }}</span>
                                   </h1>
                              </div>
                         </div>
                         <img src="../assets/media/flower.png" alt="" class="justify-end mr-6 h-[150px]
                                        max-[430px]:absolute left-full -translate-x-full">
                    </router-link>
               </article>
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
import MainWindowCard from './MainWindow-Card.vue'

export default {
     name: "SearchClient",
     components: {
          MainWindowCard
     },
     data() {
          return {
               numberInput: "",
          }
     },
     methods: {
          
          saveEnterNumber(){
               let numberForStore

               switch (this.numberInput[0]) {
                    case "8":
                         numberForStore = this.numberInput
                         break;
                    case "+":
                         numberForStore = "8" + this.numberInput.slice(2,this.numberInput.length)
                         break;
                    default:
                         numberForStore = "8" + this.numberInput
                         break;
               }
               this.$store.commit('saveEnterNumber', numberForStore.replace(/[a-zа-яё]/gi, ''))
          },
          
     },
     computed: {
          filterClientNumber() {

               if(!this.$store.state.clientStorage){
                    return [{
                    number: "891812343554",
                    name: "Сергей",
                    points: 12,
                    totalAmount: 0,
                    purchaseHistory: []
               },]
               }

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
     },
     mounted(){
          this.$store.commit('getClientStorageFromAPI')
     }
}
</script>