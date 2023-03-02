<template>
<div class="max-w-[400px] mx-auto h-screen bg-[#F8C8C0]">
  <header class="bg-[#305346]">
    <h1 class="text-6xl text-center text-white pt-5 pb-5">Луг</h1>
  </header>
  <main>
    <div class="last:mb-0"
    v-if="numberInput.length >= 5">
      <article class="bg-[#FBDCD7] mb-5"
      v-for="(clientInfo, idx) in filterClientNumber" v-bind:key="idx">
        <div>
          <h2 >{{ clientInfo.name }}</h2>
          <h1>{{ clientInfo.number }}</h1>
          <h3>{{ clientInfo.points }} {{ renderAmountPoint(clientInfo.points) }}</h3>
        </div>
      </article>
    </div>
    <input class="focus:outline-none mx-auto" maxlength="12" type="text" placeholder="Введите номер гостя" v-model="numberInput">
  </main>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      numberInput: "",
      clientStorage: [
        {
          number: 812354567890,
          name: "Антон",
          points: 1212325,
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
      ]
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
    filterClientNumber(){
      return this.clientStorage.filter(card => String(card.number).slice(0, this.numberInput.length) == this.numberInput)
    }
  },
  watch:{
  
  }
}
</script>
