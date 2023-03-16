<template>
  <main class="h-screen max-sm:bg-[#F8C8C0]">
    <div class="py-6">
      <article class="bg-[#FBDCD7] max-w-[50%] rounded-r-full flex justify-between items-center shadow-lg">
        <div class="text-[#686767] px-8 py-7">
          <div class="person__main__block">
            <h2 class="text-xl">{{ clientInfo.name }}</h2>
            <h2 class="text-2xl">{{ clientInfo.number }}</h2>
          </div>
          <hr class="w-full h-1 bg-[#305346]">
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
      <label class="bg-transparent py-2 px-20 border-2 border-[#305346] rounded-full flex">
        <input type="radio" name="purchaseType" value="newWPurchaseSelect" v-model="purchaseType">
        <h3 class="text-[#305346] text-xl font-medium">Новая покупка</h3>
      </label>
      <label class="bg-transparent py-2 px-20 border-2 border-[#305346] rounded-full flex">
        <input type="radio" name="purchaseType" value="historyPurchaseSelect" v-model="purchaseType">
        <h3 class="text-[#305346] text-xl font-medium">История покупок</h3>
      </label>
    </div>
    <new-purchase v-if="purchaseType == 'newWPurchaseSelect'"/>
    <history-purchase-client v-if="purchaseType == 'historyPurchaseSelect'"/>
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