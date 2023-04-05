<template>
  <main class="max-sm:bg-main-bg">
    <div class="py-6">
      <article 
        class="bg-card-bg w-1/2 rounded-r-full flex justify-between items-center shadow-lg
          max-lg:w-2/3 max-sm:w-full">
        <div class="text-main-color-text px-8 py-7">
          <div class="person__main__block">
            <h2 class="text-xl">{{ selectedClient.name }}</h2>
            <h2 class="text-2xl">{{ selectedClient.number}}</h2>
          </div>
          <hr class="w-full h-1 bg-main-green">
          <div>
            <h1>
              <span class="text-3xl align-middle">{{ selectedClient.points % 1 === 0 ? selectedClient.points : selectedClient.points.toFixed(2)}}</span> <span class="text-xl align-middle">бонусов</span>
            </h1>
            <div class="flex items-center">
              <h1>
                <span class="text-3xl align-middle">{{ selectedClient.totalAmount }}</span> <span class="text-xl align-middle">сумма выкупа</span>
              </h1>
              <img src="../assets/media/pig.svg" alt="СвинкаБонус" class="ml-2">
            </div>
            
          </div>
          <router-link to="clientinfo/editClientInfo">
            <button class="font-semibold w-1/2 mt-2 rounded-full border-2">Упр.</button>
          </router-link>
        </div>
        <img src="../assets/media/flower.png" alt="" 
            class="justify-end mr-6 h-[150px]
              max-[500px]:absolute left-full -translate-x-full">
      </article>
    </div>

    <div class="flex justify-around py-6">
      <label 
        class="py-2 px-20 flex relative cursor-pointer
        max-md:px-15
        max-sm:px-10">
        <input type="radio" name="purchaseType" value="newWPurchaseSelect" class="peer/purchaseType hidden" v-model="purchaseType">
        <h3 class="text-main-green text-xl font-semibold peer-checked/purchaseType:text-white">Новая покупка</h3>
        <div class="absolute w-full h-full top-0 left-0 rounded-full z-[-1] border-4 border-main-green peer-checked/purchaseType:bg-main-green"></div>
      </label>
      <label 
        class="py-2 px-20 flex relative cursor-pointer
        max-md:px-15
        max-sm:px-10">
        <input type="radio" name="purchaseType" value="historyPurchaseSelect" class="peer/purchaseType hidden" v-model="purchaseType">
        <h3 class="text-main-green text-xl font-semibold peer-checked/purchaseType:text-white">История покупок</h3>
        <div class="absolute w-full h-full top-0 left-0 rounded-full z-[-1] border-4 border-main-green peer-checked/purchaseType:bg-main-green"></div>
      </label>
    </div>
    <new-purchase v-if="purchaseType == 'newWPurchaseSelect'"/>
    <history-purchase-client v-if="purchaseType == 'historyPurchaseSelect'" :clientPurchaseHistory="this.$store.state.selectedClient.purchaseHistory"/>
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
  data() {
    return {
      purchaseType: "newWPurchaseSelect",
      selectedClient: {}
    }
  }, 
  created: function(){
    this.selectedClient = this.$store.state.selectedClient
  }, 
  beforeUnmount: function(){
      console.log("Клиент" + this.$store.state.selectedClient)
    }
}
</script>