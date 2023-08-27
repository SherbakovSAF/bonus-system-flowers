<template>
     <article class="bg-[#FBDCD7] w-1/2 rounded-r-full shadow-lg mt-6 flex justify-around items-center cursor-pointer
          max-[500px]:relative
          max-lg:w-2/3 max-sm:w-full"
          @click="selectClient(cardInfo)">
          <div class="text-[#686767] px-8 py-7">
               <div class="person__main__block">
                    <h2 class="text-xl">{{ cardInfo.name }}</h2>
                    <h2 class="text-2xl">{{ cardInfo.number }}</h2>
               </div>
               <div>
                    <h1>
                         <span class="text-3xl">
                              {{ fixedZero }}
                         </span>
                         <span class="text-xl ml-1">
                              {{ getBonusWord }}
                         </span>
                    </h1>
                    <h1 class="flex items-center">
                         <span class="text-3xl">
                              {{ cardInfo.totalAmount }}
                         </span>
                         <span class="text-xl ml-1">сумма выкупа</span>
                         <img src="../assets/media/pig.svg" alt="СвинкаБонус" class="ml-2">
                    </h1>
               </div>
          </div>
          <img src="../assets/media/flower.png" alt="Цветок"
               class=" h-[150px] max-[500px]:absolute left-full -translate-x-full">
          <button @click.stop="deleteClientInfo(cardInfo)">
               <img src="../assets/media/clear.svg"
                    class="w-16 h-16 bg-main-green rounded-full p-1" alt="Удалить" />
               </button>
     </article>
</template>


<script>
export default {
     name: "MainWindow-Card",
     props: {
          cardInfo: {type: Object, required: false}
     },
     methods: {
          selectClient(clientInfo){
               this.$store.commit('selectClient', clientInfo)
               this.$router.push("clientInfo")
          },
          deleteClientInfo(clientInfo){
               this.$store.commit('activeModalInfo', {text: 'Вы уверены, что данного клиента надо удалять?', type: 'confirm'})
               
               // Не уверен в этом куске кода
               let checkAnswer = setInterval(()=>{
                    if(this.$store.getters.getModalCallback == true){
                         this.$store.commit('deleteClientInfo', clientInfo)
                         clearInterval(checkAnswer)
                    }
                    if(this.$store.getters.getModalCallback == false){
                         clearInterval(checkAnswer)
                    }
               }, 500)
          
          }
     },
     computed: {
          fixedZero(){
               const points = this.cardInfo.points
               return points % 1 === 0 ? points : points.toFixed(2)
          },
          getBonusWord() {
               const points = this.cardInfo.points

               if (points % 10 === 1 && points % 100 !== 11) {
                    return "бонус"
               }

               if (points % 10 >= 2 && points % 10 <= 4 && (points % 100 < 10 || points % 100 >= 20)) {
                         return "бонуса"
               }
           
               return "бонусов"
          },
          
     }
}
</script>