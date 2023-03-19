<template>
  <main class="h-screen max-sm:bg-main-bg">
    <div class="py-6">
      <article class="bg-card-bg max-w-[50%] rounded-r-full flex justify-between items-center shadow-lg">
        <div class="text-main-color-text px-8 py-7">
          <div class="person__main__block">
            <h2 class="text-xl">{{ clientInfo.name }}</h2>
            <h2 class="text-2xl">{{ clientInfo.number }}</h2>
          </div>
          <hr class="w-full h-1 bg-main-green">
          <div>
            <h1><span class="text-3xl">{{ clientInfo.points }}</span> <span class="text-xl">бонусов</span></h1>
            <h1 class="flex items-center"><span class="text-3xl">{{ clientInfo.totalAmount }}</span> <span
                class="text-xl">сумма выкупа</span><img src="../assets/media/pig.svg" alt="СвинкаБонус" class="ml-2"></h1>
          </div>
        </div>
        <img src="../assets/media/flower.png" alt="" class="justify-end mr-6 h-[150px]">
      </article>
    </div>
    <div class="flex justify-around py-6">
      <label class="py-2 px-20 flex relative cursor-pointer">
        <input type="radio" name="purchaseType" value="newWPurchaseSelect" class="peer/purchaseType hidden" v-model="purchaseType">
        <h3 class="text-main-green text-xl font-semibold peer-checked/purchaseType:text-white">Новая покупка</h3>
        <div class="absolute w-full h-full top-0 left-0 rounded-full z-[-1] border-4 border-main-green peer-checked/purchaseType:bg-main-green"></div>
      </label>
      <label class="py-2 px-20 flex relative cursor-pointer">
        <input type="radio" name="purchaseType" value="historyPurchaseSelect" class="peer/purchaseType hidden" v-model="purchaseType">
        <h3 class="text-main-green text-xl font-semibold peer-checked/purchaseType:text-white">История покупок</h3>
        <div class="absolute w-full h-full top-0 left-0 rounded-full z-[-1] border-4 border-main-green peer-checked/purchaseType:bg-main-green"></div>
      </label>
    </div>
    <new-purchase v-if="purchaseType == 'newWPurchaseSelect'"/>
    <history-purchase-client v-if="purchaseType == 'historyPurchaseSelect'" :clientPurchaseHistory="[
      {
      id: 0,
      date: '23.21.2222',
      sum: 123,
      subBonus: 100,
      plusBonus: 20,
      typeOperationPoint: 'PLUS',
      listPurchase: 'Тюльпаны, Огурцы',
 }
 ]"/>
  </main>
</template>

<script>
import NewPurchase from './NewPurchase.vue'
import HistoryPurchaseClient from './HistoryPurchaseClient.vue'

export default {
  name: "ClientInfo",
  components: {
    NewPurchase,
    HistoryPurchaseClient
  },
  props: {
    clientInfo: {
      type: Object,
      required: true,
      default: () => {
        return {
          number: "Ошибка приложения",
        }
      }
    }
  },
  data() {
    return {
      purchaseType: "newWPurchaseSelect",
    }
  }
}
</script>