<template>
     <article class="bg-[#FBDCD7] w-1/2 rounded-r-full  shadow-lg mt-6
                              max-md:w-2/3 max-sm:w-full">
          <router-link to="inputInfo/regNewClient"
               @click="saveEnterNumber" 
               class="flex justify-between items-center
               max-[430px]:relative">
               <div class="text-[#686767] px-8 py-7">
                    <div class="person__main__block">
                         <h2 class="text-xl">{{newClientNumber.length ? 'Клиент не найден' : ''}} </h2>
                         <h1 class="text-2xl">Добавить карточку с номером<br>
                              <span class="text-3xl font-semibold">
                                   {{ newClientNumber }}
                              </span>
                         </h1>
                    </div>
               </div>
               <img src="../assets/media/flower.png" alt="Flower" 
                    class="justify-end h-[150px]
                    max-[430px]:absolute left-full -translate-x-full">
          </router-link>
     </article>
</template>


<script>
export default {
     name: "MainWindow-NewClientCard",
     props: {
          newClientNumber: {type: String, required: true}
     },
     methods: {
          saveEnterNumber(){
               // let numberForStore

               // switch (this.numberInput[0]) {
               //      case "8":
               //           numberForStore = this.numberInput
               //           break;
               //      case "+":
               //           numberForStore = "8" + this.numberInput.slice(2,this.numberInput.length)
               //           break;
               //      default:
               //           numberForStore = "8" + this.numberInput
               //           break;
               // }
               // this.$store.commit('saveEnterNumber', numberForStore.replace(/[a-zа-яё]/gi, ''))
               this.$store.commit('saveEnterNumber', this.newClientNumber)
          },
     }
}
</script>