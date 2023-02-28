<template>
  <header class="banner__block">
      <h1>Луг</h1>
  </header>
  <main>
    <article class="card__client">
        <div class="info_wrap"
              v-for="(clientInfo, idx) in clientStorage"
              v-bind:key="idx">
          <h2>{{ clientInfo.name }}</h2>
          <h1>{{ clientInfo.number }}</h1>
          <h3>{{ clientInfo.points}}</h3>
        </div>
    </article>
    <input type="text" placeholder="Введите номер гостя"
    v-model="numberInput">
  </main>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      numberInput: "",
      clientStorage: [
        {
          number: 81234567890,
          name: "Сергей",
          points: 123,
          purchaseHistory: [
            {
              date: "23.21.2222",
              sum: 123,
              typeOperationPoint: "SUB", // or "PLUS"
              listPurchase: "Тюльпаны",
            },
          ]
        }
      ]
    }
  },
}
</script>

<style>
:root{
  --main__accent__color: #305346,
  --main__bg: #FBDCD7,
  --main__text_color: #686767,
}

h1{
  background-color: ;
}

</style>
