<template>
     <article class="bg-[#FBDCD7] w-1/2 rounded-r-full  shadow-lg mt-6
               max-md:w-2/3 max-sm:w-full">
          <div class="flex justify-between items-center cursor-pointer
               max-[430px]:relative"
               @click="saveEnterNumber">
               <div class="text-[#686767] px-8 py-7">
                    <h2 class="text-xl">{{newClientNumber.length ? 'Клиент не найден' : ''}} </h2>
                    <h1 class="text-2xl">Добавить карточку с номером<br>
                         <span class="text-3xl font-semibold">
                              {{ newClientNumber }}
                         </span>
                    </h1>
               </div>
               <img src="../assets/media/flower.png" alt="Flower" 
                    class="justify-end h-[150px]
                    max-[430px]:absolute left-full -translate-x-full">
          </div>
     </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent( {
     name: "MainWindow-NewClientCard",
     props: {
          newClientNumber: {type: String, required: true}
     },
     methods: {
          saveEnterNumber():void{
               this.$store.commit('selectClient', this.newClientNumber)
               this.$router.push({path: 'inputInfo/regNewClient'})
          },
     }
})
</script>К