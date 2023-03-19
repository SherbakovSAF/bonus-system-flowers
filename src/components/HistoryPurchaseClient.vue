<template>
<div>
     <article class="bg-[#FBDCD7] w-1/2 rounded-l-full shadow-lg mt-6 ml-auto">
          <a href="#" class="flex justify-between items-center ">
               <img src="../assets/media/flower.png" alt="" class="justify-end ml-6 ">
               <div class="w-2/3 text-main-color-text py-3"
               v-for="historyPurchase in clientPurchaseHistory"
               :key="historyPurchase.id">
                    <div>
                         <h2 class="text-sm">Дата</h2>
                         <h1 class="text-lg font-medium">{{ historyPurchase.date }}</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">Сумма покупки</h2>
                         <h1 class="text-lg font-medium"><span>{{ historyPurchase.sum }}</span>₽</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">{{ historyPurchase.typeOperationPoint == "SUB" ? 'Списано' : 'Начислено'}}</h2>
                         <h1 class="text-lg font-medium"><span>{{ historyPurchase.typeOperationPoint == "SUB" ? historyPurchase.subBonus : historyPurchase.plusBonus}}</span> бонусов</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">Купили</h2>
                         <h1 class="text-lg font-medium">{{ historyPurchase.listPurchase}}</h1>
                    </div>
               </div>
          </a>
     </article>
     <button type="submit" class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto">Показать ещё</button>
</div>
</template>

<script>
export default {
     name: "HistoryPurchaseClient",
     props: {
          clientPurchaseHistory: {
               type: Array,
               required: true,
               default: () => {
                    return [
                         {
                              id: 0,
                              date: "23.21.2222",
                              sum: 123,
                              typeOperationPoint: "SUB", // or "PLUS"
                              listPurchase: "Тюльпаны",
                         }
                    ]
               }
          }
     },

     data(){
          return{
               
          }
     }
}
</script>