<template>
  <div class="font-montserrat max-w-6xl mx-auto over overflow-hidden h-screen">
    <header class="bg-[#305346] h-28 flex items-center justify-center relative before:content-jointSettings">
      <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 mr-8"
        style="transform: scale(-1,1) rotate(33.4deg)">
      <h1 class="text-6xl text-white">Луг</h1>
      <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 rotate-[33.4deg] ml-8">
    </header>
    <main class="h-screen max-sm:bg-[#F8C8C0]">
      <!-- <div v-if="numberInput.length >= 5">
      <article 
      v-for="(clientInfo, idx) in filterClientNumber" v-bind:key="idx">
        <div>
          <h2 >{{ clientInfo.name }}</h2>
          <h1>{{ clientInfo.number }}</h1>
          <h3>{{ clientInfo.points }} {{ renderAmountPoint(clientInfo.points) }}</h3>
        </div>
      </article>
    </div>
    <form>
      <div>
        <input maxlength="12" type="text" placeholder="Введите номер гостя" v-model="numberInput">
      </div>
    </form> -->
      <div class="py-6">
        <article class="bg-[#FBDCD7] max-w-[50%] rounded-r-full flex justify-between items-center shadow-lg">
          <div class="text-[#686767] px-8 py-7">
            <div class="person__main__block">
              <h2 class="text-xl">Сергей</h2>
              <h2 class="text-2xl">812345</h2>
            </div>
            <div>
              <h1><span class="text-3xl">1200</span> <span class="text-xl">бонусов</span></h1>
              <h1 class="flex items-center"><span class="text-3xl">100к</span> <span class="text-xl">сумма выкупа</span><img
                  src="./assets/media/pig.svg" alt="СвинкаБонус" class="ml-2"></h1>
            </div>
          </div>
          <img src="./assets/media/flower.png" alt="" class="justify-end mr-6 h-[150px]">
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
            <img src="./assets/media/bouquetInput.svg" alt="" class="absolute">
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
            <img src="./assets/media/bouquetInput.svg" alt="" class="absolute">
            <input maxlength="12" type="text" placeholder="Сколько бонусов списать"
              class="bg-white py-3 px-4 rounded-full w-1/3 outline-0 font-medium text-[#686767]"
              v-model="addNewPurchase.numberBonus">
          </div>
        </form>
        <form class="py-4">
          <div class="flex relative">
            <img src="./assets/media/bouquetInput.svg" alt="" class="absolute">
            <input maxlength="12" type="text" placeholder="Что приобрели?(Необязательно)"
              class="bg-white py-3 px-4 rounded-full w-1/3 outline-0 font-medium text-[#686767]"
              v-model="addNewPurchase.shopList">
          </div>
        </form>
        <form class="py-4">
          <div>
            <img src="./assets/media/bouquetInput.svg" alt="" class="absolute">
            <select class="bg-white py-3 px-4 rounded-full w-1/3 outline-0 font-medium text-[#686767]">
              <option class="text-[#686767] text-lg" disabled selected>Кто продал</option>
              <option class="text-[#686767] text-lg">Надя</option>
              <option class="text-[#686767] text-lg">Вика</option>
            </select>
          </div>
        </form>
      </div>
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
      ],
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
      return this.clientStorage.filter(card => String(card.number).slice(0, this.numberInput.length) == this.numberInput)
    }
  },
  watch: {

  }
}
</script>
