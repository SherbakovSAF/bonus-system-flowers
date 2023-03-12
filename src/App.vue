<template>
  <div class="font-montserrat max-w-6xl mx-auto over overflow-hidden h-screen">
    <header class="bg-[#305346] h-28 flex items-center justify-center relative before:content-jointSettings">
      <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 mr-8"
        style="transform: scale(-1,1) rotate(33.4deg)">
      <h1 class="text-6xl text-white">Луг</h1>
      <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 rotate-[33.4deg] ml-8">
    </header>
    <search-client />
  </div>
</template>

<script>
import SearchClient from './components/SearchClient.vue'


export default {
  name: 'App',
  components: {
    SearchClient,
  },
  data() {
    return {
    numberInput: "",
      purchaseType: "newWPurchaseSelect",
      addNewPurchase: {
        sum: null,
        typeBonus: 'ACCRUE',
        numberBonus: null,
        shopList: "",
        salesman: "",
      }
    }
  },
}
</script>
<style>
html{
  background-color: #F8C8C0;
}
</style>