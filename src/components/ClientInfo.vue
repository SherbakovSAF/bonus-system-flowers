<template>
  <main class="h-screen max-sm:bg-[#F8C8C0]">
    <div class="py-6">
      <article class="bg-[#FBDCD7] max-w-[50%] rounded-r-full flex justify-between items-center shadow-lg">
        <div class="text-[#686767] px-8 py-7">
          <div class="person__main__block">
            <h2 class="text-xl">Сергей</h2>
            <h2 class="text-2xl">812345</h2>
          </div>
          <hr class="w-full h-1 bg-[#305346]">
          <div>
            <h1><span class="text-3xl">1200</span> <span class="text-xl">бонусов</span></h1>
            <h1 class="flex items-center"><span class="text-3xl">100к</span> <span class="text-xl">сумма выкупа</span><img
                src="../assets/media/pig.svg" alt="СвинкаБонус" class="ml-2"></h1>
          </div>
        </div>
        <img src="../assets/media/flower.png" alt="" class="justify-end mr-6 h-[150px]">
      </article>
    </div>
    <div class="flex justify-around py-6">
      <label class="bg-transparent py-2 px-20 border-2 border-[#305346] rounded-full flex">
        <input type="radio" name="purchaseType" value="newWPurchaseSelect" v-model="purchaseType">
        <h3 class="text-[#305346] text-xl font-medium">Новая покупка</h3>
      </label>
      <label class="bg-transparent py-2 px-20 border-2 border-[#305346] rounded-full flex">
        <input type="radio" name="purchaseType" value="historyPurchaseSelect" v-model="purchaseType">
        <h3 class="text-[#305346] text-xl font-medium">История покупок</h3>
      </label>
    </div>
    <div class="newPurchaseBlock" v-if="purchaseType == 'newWPurchaseSelect'">
      <form class="py-3">
        <div class="flex relative">
          <img src="../assets/media/bouquetInput.svg" alt="" class="absolute">
          <input maxlength="12" type="text" placeholder="Введите сумму покупки"
            class="bg-white py-3 px-4 rounded-full w-1/3 outline-0 font-medium text-[#686767]"
            v-model="addNewPurchase.sum">
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
        <div class="flex relative">
          <img src="../assets/media/bouquetInput.svg" alt="" class="absolute">
          <input maxlength="12" type="text" placeholder="Сколько бонусов списать"
            class="bg-white py-3 px-4 rounded-full w-1/3 outline-0 font-medium text-[#686767]"
            v-model="addNewPurchase.numberBonus">
        </div>
      </form>
      <form class="py-4">
        <div class="flex relative">
          <img src="../assets/media/bouquetInput.svg" alt="" class="absolute">
          <input maxlength="12" type="text" placeholder="Что приобрели?(Необязательно)"
            class="bg-white py-3 px-4 rounded-full w-1/3 outline-0 font-medium text-[#686767]"
            v-model="addNewPurchase.shopList">
        </div>
      </form>
      <form class="py-4">
        <div>
          <img src="../assets/media/bouquetInput.svg" alt="" class="absolute">
          <select class="bg-white py-3 px-4 rounded-full w-1/3 outline-0 font-medium text-[#686767]">
            <option class="text-[#686767] text-lg" disabled selected>Кто продал</option>
            <option class="text-[#686767] text-lg">Надя</option>
            <option class="text-[#686767] text-lg">Вика</option>
          </select>
        </div>
      </form>
    </div>
  </main>
</template>

<!-- <script>
export default {
  name: "ClientInfo",
  data(){
    return {
      
    }
  }
}
</script> -->