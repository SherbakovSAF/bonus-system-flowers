<template>
<div>
     <article class="bg-[#FBDCD7] w-1/2 rounded-l-full shadow-lg mt-6 ml-auto">
          <a href="#" class="flex justify-between items-center ">
               <img src="../assets/media/flower.png" alt="" class="justify-end ml-6 ">
               <div class="w-1/2 text-main-color-text">
                    <div>
                         <h2 class="text-sm">Дата</h2>
                         <h1 class="text-lg font-medium">11.09.2000</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">Сумма покупки</h2>
                         <h1 class="text-lg font-medium"><span>1000</span>₽</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">Начислено</h2>
                         <h1 class="text-lg font-medium"><span>100</span>бонусов</h1>
                    </div>
                    <div>
                         <h2 class="text-sm">Купили</h2>
                         <h1 class="text-lg font-medium">Цветы</h1>
                    </div>
               </div>
          </a>
     </article>
</div>
</template>

<script>
export default {
     name: "HistoryPurchaseClient",
     data(){
          return{
               
          }
     }
}
</script>