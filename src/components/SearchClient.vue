<template>
     <div>
          <div>
               <article class="bg-[#FBDCD7] w-1/2 rounded-r-full  shadow-lg mt-6
                              max-lg:w-2/3 max-sm:w-full" v-for="(clientInfo, idx) in filterClientNumber" v-bind:key="idx">
                    <router-link to="clientInfo" @click="selectClient(clientInfo)" class="flex justify-between items-center
                                   max-[500px]:relative">
                         <div class="text-[#686767] px-8 py-7">
                              <div class="person__main__block">
                                   <h2 class="text-xl">{{ clientInfo.name }}</h2>
                                   <h2 class="text-2xl">{{ clientInfo.number }}</h2>
                              </div>
                              <div>
                                   <h1>
                                        <span class="text-3xl">{{ clientInfo.points % 1 === 0 ? clientInfo.points : clientInfo.points.toFixed(2) }}</span>
                                        <span class="text-xl ml-1"> {{ renderAmountPoint(clientInfo.points) }}</span>
                                   </h1>
                                   <h1 class="flex items-center">
                                        <span class="text-3xl">{{ clientInfo.totalAmount }}</span>
                                        <span class="text-xl ml-1">сумма выкупа</span>
                                        <img src="../assets/media/pig.svg" alt="СвинкаБонус" class="ml-2">
                                   </h1>
                              </div>
                         </div>
                         <img src="../assets/media/flower.png" alt="" class="justify-end mr-6 h-[150px]
                                        max-[500px]:absolute left-full -translate-x-full">
                    </router-link>
               </article>
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
export default {
     name: "SearchClient",
     data() {
          return {
               numberInput: "",
          }

     },
     methods: {
          renderAmountPoint(sumPoint) {
               const end1 = /1$/
               const end2to4 = /[2-4]$/
               // const end0or5to9 = /[5-9,0]$/ 
               if (end1.test(sumPoint)) {
                    return "бонус"
               } else if (end2to4.test(sumPoint)) {
                    return "бонуса"
               } else {
                    return "бонусов"
               }
          },
          selectClient(clientInfo){
               this.$store.commit('selectClient', clientInfo)
          },
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
          }
     },
     computed: {
          filterClientNumber() {
               const firstValueTransValue = this.numberInput.slice(0, 1)
               const templateSliceNumber = (sliceNumberInputLength, internationalFormatSlice) => {
                    // Выносим шаблон
                    return this.$store.state.clientStorage.filter(card => card.number.slice(1, sliceNumberInputLength) == this.numberInput.slice(internationalFormatSlice, this.numberInput.length))
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
     }
}
</script>