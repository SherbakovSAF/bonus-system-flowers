<template>
  <div class="font-montserrat max-w-6xl mx-auto over overflow-hidden h-screen">
    <header class="bg-main-green h-28 flex items-center justify-center relative before:content-jointSettings">
      <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 mr-8"
        style="transform: scale(-1,1) rotate(33.4deg)">
      <h1 class="text-6xl text-white">Цветы</h1>
      <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 rotate-[33.4deg] ml-8">
    </header>
    <!-- <search-client /> -->
    <client-info :client-info="temporaryObjectForPropsChecked"/>
  </div>
</template>

<script>
// import SearchClient from './components/SearchClient.vue'
import ClientInfo from './components/ClientInfo.vue'


export default {
  name: 'App',
  components: {
    // SearchClient,
    ClientInfo,
  },
  data() {
    return {
      temporaryObjectForPropsChecked: {
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
    }
  },
}
</script>
<style>
html {
  background-color: #F8C8C0;
}
</style>