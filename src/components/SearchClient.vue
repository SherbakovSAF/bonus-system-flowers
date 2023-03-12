<template>
     <div>     
          <article class="bg-[#FBDCD7] w-1/2 rounded-r-full  shadow-lg mt-6"
          v-for="(clientInfo, idx) in filterClientNumber" v-bind:key="idx">
               <a href="#" class="flex justify-between items-center ">
               <div class="text-[#686767] px-8 py-7">
                    <div class="person__main__block">
                         <h2 class="text-xl">{{ clientInfo.name }}</h2>
                         <h2 class="text-2xl">{{ clientInfo.number }}</h2>
                    </div>
                    <hr class="w-full h-1 bg-[#305346]">
                    <div>
                         <h1><span class="text-3xl">{{ clientInfo.points }}</span> <span class="text-xl">{{
                              renderAmountPoint(clientInfo.points) }}</span></h1>
                         <h1 class="flex items-center">
                              <span class="text-3xl">{{ clientInfo.totalAmount }}</span>
                              <span class="text-xl">сумма выкупа</span>
                              <img src="../assets/media/pig.svg" alt="СвинкаБонус" class="ml-2">
                         </h1>
                    </div>
               </div>
               <img src="../assets/media/flower.png" alt="" class="justify-end mr-6 h-[150px]">
          </a>
          </article>
     </div>
     <form class="flex justify-center mt-5">
          <div class="w-1/2 max-md:w-[90%]">
               <img src="../assets/media/bouquetInput.svg" alt="" class="absolute">
               <input class="bg-white py-3 px-4 rounded-full w-full outline-0 font-medium text-[#686767]" maxlength="12"
                    type="text" placeholder="Введите номер гостя" v-model="numberInput">
          </div>
     </form>
</template>

<script>
export default {
     name: "SearchClient",
     data() {
          return {
               numberInput: "",
               clientStorage: [
                    {
                         number: 812354567890,
                         name: "Антон",
                         points: 1212325,
                         totalAmount: 200,
                         purchaseHistory: [
                              {
                                   date: "23.21.2222",
                                   sum: 123,
                                   typeOperationPoint: "SUB", // or "PLUS"
                                   listPurchase: "Тюльпаны",
                              },
                         ]
                    },
                    {
                         number: 81234567890,
                         name: "Сергей",
                         points: 121,
                         purchaseHistory: [
                              {
                                   date: "23.21.2222",
                                   sum: 123,
                                   typeOperationPoint: "SUB", // or "PLUS"
                                   listPurchase: "Тюльпаны",
                              },
                              {
                                   date: "13.21.2222",
                                   sum: 12543,
                                   typeOperationPoint: "SUB", // or "PLUS"
                                   listPurchase: "Тюльпаны",
                              },
                         ]
                    },
                    {
                         number: 8123454567890,
                         name: "Игорь",
                         points: 123334,
                         purchaseHistory: [
                         ]
                    },
               ],

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
     },
     computed: {
          filterClientNumber() {
               // Фильтрация номера клиента по введёному номеру в инпут. Номер клиента обрезается по количеству введёных символов в ипут, чтобы происход поиск, 
               return this.clientStorage.filter(card => String(card.number).slice(0, this.numberInput.length) == this.numberInput)
          }

     }
}
</script>