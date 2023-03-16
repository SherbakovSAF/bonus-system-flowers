<template>
     <div>
          <div>
               <article class="bg-[#FBDCD7] w-1/2 rounded-r-full  shadow-lg mt-6"
                    v-for="(clientInfo, idx) in filterClientNumber" v-bind:key="idx">
                    <a href="#" class="flex justify-between items-center ">
                         <div class="text-[#686767] px-8 py-7">
                              <div class="person__main__block">
                                   <h2 class="text-xl">{{ clientInfo.name }}</h2>
                                   <h2 class="text-2xl">{{ clientInfo.number }}</h2>
                              </div>

                              <div>
                                   <h1>
                                        <span class="text-3xl">{{ clientInfo.points }}</span>
                                        <span class="text-xl ml-1"> {{ renderAmountPoint(clientInfo.points) }}</span>
                                   </h1>
                                   <h1 class="flex items-center">
                                        <span class="text-3xl">{{ clientInfo.totalAmount }}</span>
                                        <span class="text-xl ml-1">сумма выкупа</span>
                                        <img src="../assets/media/pig.svg" alt="СвинкаБонус" class="ml-2">
                                   </h1>
                              </div>
                         </div>
                         <img src="../assets/media/flower.png" alt="" class="justify-end mr-6 h-[150px]">
                    </a>
               </article>
          </div>
          <div v-if="filterClientNumber.length === 0">
               <article class="bg-[#FBDCD7] w-1/2 rounded-r-full  shadow-lg mt-6">
                    <a href="#" class="flex justify-between items-center ">
                         <div class="text-[#686767] px-8 py-7">
                              <div class="person__main__block">
                                   <h2 class="text-xl">Клиент не найден</h2>
                                   <h1 class="text-2xl">Добавить карточку с номером<br>
                                        <span class="text-3xl font-semibold">{{ numberInput }}</span>
                                   </h1>
                              </div>
                         </div>
                         <img src="../assets/media/flower.png" alt="" class="justify-end mr-6 h-[150px]">
                    </a>
               </article>
          </div>
     </div>

     <form class="flex justify-center mt-5">
          <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4">
               <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3" >
               <input class="outline-0 w-full rounded-[inherit] font-medium text-[#686767] text-2xl" maxlength="14" type="tel"
                    placeholder="Введите номер гостя" v-model="numberInput">
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
                         number: "812354567890",
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
                         number: "81234567890",
                         name: "Сергей",
                         points: 121,
                         totalAmount: 200,
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
                         number: "8123454567890",
                         name: "Игорь",
                         points: 123334,
                         totalAmount: 200,
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
               
               const firstValueTransValue = this.numberInput.slice(0,1)
               
               const templateSliceNumber = (sliceNumberInputLength, internationalFormatSlice) =>{
                    return this.clientStorage.filter(card => card.number.slice(1, sliceNumberInputLength) == this.numberInput.slice(internationalFormatSlice, this.numberInput.length))
               }

               if(firstValueTransValue == "+"){
                    return templateSliceNumber(this.numberInput.length - 1, 2)
               } else {
                    return templateSliceNumber(this.numberInput.length, 1)
               }
               // console.log(this.clientStorage.filter(n => Object.values(n).some(m => m.includes(this.numberInput)))) 
               // console.log(this.clientStorage.filter(n => Object.values(n.number).some(m => m.includes(this.numberInput)))) 
          // return this.clientStorage.filter(n => Object.values(String(n.number)).some(m=> m.includes(String(this.numberInput))))
               // Фильтрация номера клиента по введёному номеру в инпут. Номер клиента обрезается по количеству введёных символов в ипут, чтобы происход поиск, 
               // return this.clientStorage.filter(card => String(card.number).slice(0, this.numberInput.length) == this.numberInput)
          }
     }
}
</script>