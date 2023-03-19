<template>
     <div>
          <form class="py-3">
               <div 
                    class="w-1/3 bg-white rounded-full flex py-3 px-4
                         max-lg:m-auto max-lg:w-2/3
                         ">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                         max-sm:text-sm" 
                         maxlength="14" type="tel"
                         placeholder="Введите сумму покупки" v-model="addNewPurchase.sum">
               </div>
          </form>
          <div class="flex justify-around">
               <label class="flex py-3 cursor-pointer">
                    <input v-model="addNewPurchase.typeBonus" type="radio" name="bonusAction" value="ACCRUE" class="peer/bonusAction hidden">
                    <div class="w-6 h-6 rounded-full box-border border-[#305346] border-[6px] bg-transparent mr-1 peer-checked/bonusAction:bg-[#305346]"></div>
                    <h3 class="text-lg text-[#305346]">Начислить</h3>
               </label>
               <label class="flex py-3 cursor-pointer">
                    <input v-model="addNewPurchase.typeBonus" type="radio" name="bonusAction" value="WRITE-OFF" class="peer/bonusAction hidden">
                    <div class="w-6 h-6 rounded-full box-border border-[#305346] border-[6px] bg-transparent mr-1 peer-checked/bonusAction:bg-[#305346]"></div>
                    <h3 class="text-lg text-[#305346]">Списать</h3>
               </label>
          </div>
          <form class="py-4" v-if="addNewPurchase.typeBonus == 'WRITE-OFF'">
               <div 
                    class="w-1/3 bg-white rounded-full flex py-3 px-4
                    max-lg:m-auto max-lg:w-2/3
                    ">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                         max-sm:text-sm"
                         maxlength="14" type="tel"
                         placeholder="Сколько бонусов списать?" v-model="addNewPurchase.numberBonus">
               </div>
          </form>
          <form class="py-4">
               <div 
                    class="w-1/3 bg-white rounded-full flex py-3 px-4
                    max-lg:m-auto max-lg:w-2/3
                    ">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                         max-sm:text-sm"
                         maxlength="14" type="tel"
                         placeholder="Сколько бонусов списать?" v-model="addNewPurchase.shopList">
               </div>
          </form>
          <form class="py-4">
               <div 
                    class="w-1/3 bg-white rounded-full flex py-3 px-4
                    max-lg:m-auto max-lg:w-2/3
                    ">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <select class="outline-0 w-full font-medium text-[#686767] text-1xl">
                         <option class="text-[#686767] text-lg opacity-10" disabled selected>Кто продал</option>
                         <option class="text-[#686767] text-lg">Надя</option>
                         <option class="text-[#686767] text-lg">Вика</option>
                    </select>
               </div>
          </form>
     </div>
     <button type="submit" 
          class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
               max-sm:w-2/3">Отправить</button>
</template>

<script>
export default {
     name: 'NewPurchase',
     data() {
          return {
               addNewPurchase: {
                    sum: null,
                    typeBonus: 'ACCRUE',
                    numberBonus: null,
                    shopList: "",
                    salesman: "",
               }
          }
     }
}
</script>