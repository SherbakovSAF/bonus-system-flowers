<template>
     <div>
          <form class="py-3">
               <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl" maxlength="14" type="tel"
                         placeholder="Введите номер гостя" v-model="addNewPurchase.sum">
               </div>
          </form>
          <div class="flex justify-around py-3">
               <label class="flex">
                    <input v-model="addNewPurchase.typeBonus" type="radio" name="bonusAction" value="ACCRUE">
                    <h3 class="text-lg text-[#305346]">Начислить</h3>
               </label>
               <label class="flex">
                    <input v-model="addNewPurchase.typeBonus" type="radio" name="bonusAction" value="WRITE-OFF">
                    <h3 class="text-lg text-[#305346]">Списать</h3>
               </label>
          </div>
          <form class="py-4" v-if="addNewPurchase.typeBonus == 'WRITE-OFF'">
               <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl" maxlength="14" type="tel"
                         placeholder="Введите номер гостя" v-model="addNewPurchase.numberBonus">
               </div>
          </form>
          <form class="py-4">
               <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl" maxlength="14" type="tel"
                         placeholder="Введите номер гостя" v-model="addNewPurchase.shopList">
               </div>
          </form>
          <form class="py-4">
               <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <select class="outline-0 w-full font-medium text-[#686767] text-1xl">
                         <option class="text-[#686767] text-lg" disabled selected>Кто продал</option>
                         <option class="text-[#686767] text-lg">Надя</option>
                         <option class="text-[#686767] text-lg">Вика</option>
                    </select>
               </div>
          </form>
     </div>
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