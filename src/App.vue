<template>
  <div class="relative">
    <div class="font-montserrat max-w-6xl mx-auto over overflow-hidden ">
      <router-link to="/">
        <header @click="$store.commit('clearSelectedClient')"
          class="bg-main-green font-playfaur h-28 flex items-center justify-center relative before:content-jointSettings">
          <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 mr-8"
            style="transform: scale(-1,1) rotate(33.4deg)">
          <h1 class="text-6xl text-white">Цветы</h1>
          <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 rotate-[33.4deg] ml-8">
        </header>
      </router-link>
      <div class="pb-14">
        <router-view />
      </div>
    </div>
    <button @click="adddd">Проверка</button>
    <modal-info :class="this.$store.state.modalInfo.isActive ? 'block' : 'hidden'" :alert-message="this.$store.state.modalInfo.text"/>
  </div>
</template>

<script>
import ModalInfo from './components/ModalInfo';
export default {
  name: 'App',
  components: {
    ModalInfo
  },
  methods: {
    async adddd(){
      const a = await fetch('/api/client')
      const b = await a.json()
      console.log(b)
    }
  }
}
</script>
<style>
html {
  background-color: #F8C8C0;
}
</style>