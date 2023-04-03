<template>
  <div class="font-montserrat max-w-6xl mx-auto over overflow-hidden ">
    <a href="#/"><header class="bg-main-green font-playfaur h-28 flex items-center justify-center relative before:content-jointSettings">
      <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 mr-8"
        style="transform: scale(-1,1) rotate(33.4deg)">
      <h1 class="text-6xl text-white">Цветы</h1>
      <img src="./assets/media/venok.png" alt="Изображение венка" class="h-28 w-16 rotate-[33.4deg] ml-8">
    </header>
    </a>
    <div class="pb-14">
      <router-view  />
    </div>
  
  </div>
  
  
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
html {
  background-color: #F8C8C0;
}
</style>