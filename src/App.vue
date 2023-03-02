<template>
<div class="main__wrap">
  <header class="banner">
    <h1>Луг</h1>
  </header>
  <main>
    <div v-if="numberInput.length >= 5">
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
    </form>
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
<style>
:root{
  --color-main: #305346;
  --main-bg: #F8C8C0;
  --second-bg: #FBDCD7;
  --main-color-text: #686767;
}

.main__wrap {
  font-family: 'Montserrat';
  max-width: 400px;
  margin: 0 auto;
  
  background-color: var(--main-bg);
  overflow: hidden;
  height: 100vh;
}
.banner {
  background-color: var(--color-main);
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.banner::after, .banner::before{
  content: "";
  position: absolute;
  display: block;
  background-image: url(./assets/media/venok.png);
  height: 114.37px;
  width: 59.77px;
  background-size: cover;
  background-position: center;
  top: -16px;

}

.banner::after{
  left: calc(100% - 30px);
  transform: translateX(-100%) rotate(33.4deg);
  
}

.banner::before{
  left: 30px;
  transform: scale(-1,1) rotate(33.4deg);
}

.banner h1 {
  color: white;
  font-size: 64px;
}

article{
  background-color: var(--second-bg);
  margin-bottom: 61px;
  max-width: 370px;
  border-radius: 0px 98.5px 98.5px 0px;
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

article:last-child{
  margin: 0;
}
article::after{
  content: "";
  display: block;
  background-image: url(./assets/media/flower.png);
  height: 127px;
  width: 90px;       
  background-size: cover;
  background-position: center;
  position: absolute;

  top: 0;
  left: 100%;
  transform: translate(calc(-100% - 16px),20px);
  z-index: 1;
}

article div {
  color: var(--main-color-text);
  padding: 28px 30px;
  margin-top: 30px;
}

article div h2 {
  font-size: 24px;
}

article div h1 {
  font-weight: 500;
  font-size: 32px;
}

article div h3 {
  font-size: 20px;
  display: flex;
  align-items: center;
}

article div h3::after{
  content: "";
  display: block;
  background-image: url(./assets/media/pig.svg);
  height: 16px;
  width: 16px;
  background-size: cover;
  background-position: center;
  margin-left: 6px;
}

form {
  display:flex;
  justify-content: center;
  padding: 30px 0px;
}
main form div{
  display: flex;
  justify-content: center;
  position: relative;
}

main form div input{
  padding: 10px 51px;
  border-radius: 30px; 
  outline: none;
  font-weight: 500;
  color: var(--main-color-text);
}

main form div::before{
  content: "";
  display: block;
  background-image: url(./assets/media/bouquetInput.svg);
  height: 22px;
  width: 22px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%); 
  left: 16px;
}

</style>