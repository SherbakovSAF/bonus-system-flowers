<template>
<div>
     <article class="bg-[#FBDCD7] w-1/2 rounded-l-full shadow-lg mt-6 ml-auto
          max-lg:w-2/3 max-sm:w-full"
          v-for="historyPurchase in sliceTemplateSell"
          :key="historyPurchase.id">
          <router-link to="#" class="flex justify-between items-center">
               <img src="../assets/media/flower.png" alt="" class="justify-end ml-6">
               <div class="w-2/3 text-main-color-text py-3">
                    <div>
                         <h2 class="text-sm">Дата</h2>
                         <h1 class="text-lg font-medium">{{ historyPurchase.date }}</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">Сумма покупки</h2>
                         <h1 class="text-lg font-medium"><span>{{ historyPurchase.sumPurchase }}</span>₽</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">{{ historyPurchase.typeOperationPoint == "SUB" ? 'Списано' : 'Начислено'}}</h2>
                         <h1 class="text-lg font-medium"><span>{{ historyPurchase.typeOperationPoint == "SUB" ? historyPurchase.subBonus : historyPurchase.plusBonus}}</span> бонусов</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">Купили</h2>
                         <h1 class="text-lg font-medium">{{ historyPurchase.listPurchase}}</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">Продавец</h2>
                         <h1 class="text-lg font-medium">{{ historyPurchase.salesman}}</h1>
                    </div>
               </div>
          </router-link>
     </article>
     <button 
     @click="page++"
     v-if="sliceTemplateSell.length < this.$store.state.selectedClient.purchaseHistory.length"
     type="submit" class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
     max-sm:w-2/3">Показать ещё</button>
</div>
</template>

<script>
export default {
     name: "HistoryPurchaseClient",
     data(){
          return{
               page: 1
          }
          
     },
     computed:{
          sliceTemplateSell(){
               1*3
               return this.$store.state.selectedClient.purchaseHistory.slice(0, this.page * 3)
          }
     }
}
</script>