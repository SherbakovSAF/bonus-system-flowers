<template>
     <article class="my-8 bg-card-bg w-1/2 rounded-r-full flex justify-between items-center shadow-lg h-40
     max-lg:w-2/3 max-sm:w-full
     max-[500px]:relative">
          <div class="text-main-color-text px-8 py-7">
               <div class="person__main__block">
               <h2 class="text-xl">{{ nameNewClient ? nameNewClient : "Имя нового клиента" }}</h2>
               <h2 class="text-2xl">{{ numberNewClient ? numberNewClient : "Номер нового клиента" }}</h2>
               </div>
          </div>
          <img src="../assets/media/flower.png" alt="" class="justify-end mr-6 h-full
          max-[500px]:absolute left-full -translate-x-full">
     </article>
     <div>
          <form class="py-4">
               <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4
               max-lg:m-auto max-lg:w-2/3">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                    max-sm:text-sm" maxlength="14" type="tel"
                         placeholder="Введите имя нового клиента"
                         v-model="nameNewClient">
               </div>
          </form>
          <form class="py-4">
               <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4
               max-lg:m-auto max-lg:w-2/3">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                    max-sm:text-sm" maxlength="14" type="tel"
                         placeholder="Введите номер нового клиента"
                         autofocus
                         v-model="numberNewClient">
               </div>
          </form>
     </div>
     <button type="submit" class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
     max-sm:w-2/3">Отправить</button>
</template>
<script>
export default{
     name: "RegNewClientInfo",
     data(){
          return {
               numberNewClient: null,
               nameNewClient: "",
          }
     },
     mounted(){
          this.numberNewClient = this.$store.state.newClientNumber
          this.$store.commit("clearNewClientNumber")
     }
}
</script>