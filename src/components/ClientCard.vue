<template>
     <article class="bg-[#FBDCD7] w-1/2 rounded-r-full shadow-lg mt-6 flex justify-around items-center cursor-pointer
          max-[500px]:relative
          max-lg:w-2/3 max-sm:w-full"
          @click="selectClient(cardInfo)">
          <div class="text-[#686767] px-8 py-7">
               <div class="person__main__block">
                    <p class="text-xl">{{ cardInfo.name }}</p>
                    <h2 class="text-2xl">{{ usePhoneMask }}</h2>
               </div>
               <div>
                    <dl class="flex items-center">
                         <dt class="text-3xl">
                              {{ pointsFixedZero }} 
                         </dt>
                         <dd class="text-xl ml-1">
                              {{ formatedGetBonusWord }}
                         </dd>
                    </dl>
                    <dl class="flex items-center">
                         <dt class="text-3xl">
                              {{ cardInfo.total_purchase }}
                         </dt>
                         <dl class="text-xl ml-1 flex items-center">
                              <p>сумма выкупа</p>
                              <img src="@/assets/media/pig.svg" alt="BonusLogo" class="ml-2">
                         </dl>
                    </dl>
               </div>
          </div>
          <img src="@/assets/media/flower.png" alt="Flowers"
               class=" h-[150px] max-[500px]:absolute left-full -translate-x-full">
          <button @click.stop="deleteClientInfo(cardInfo)">
               <img src="@/assets/media/clear.svg"
                    class="w-16 h-16 bg-main-green rounded-full p-1" alt="DeleteClientInfo" />
          </button>
     </article>
</template>


<script>
import formating from '@/utils/formating'
import PhoneMask from '@/utils/phoneMask'

export default {
     name: "ClientCard",
     props: {
          cardInfo: {type: Object, required: false}
     },
     methods: {
          selectClient(clientInfo){
               this.$store.commit('selectClient', clientInfo)
               this.$router.push({path: "profile"})
          },
          deleteClientInfo(clientInfo){
               // this.$store.commit('activeModalInfo', {text: 'Вы уверены, что данного клиента надо удалять?', type: 'confirm'})
               try {
                    this.$store.dispatch('deleteClient', clientInfo.id)
               } catch (error) {
                    alert(error.message)
               }
               // Не уверен в этом куске кода
               // let checkAnswer = setInterval(()=>{
               //      if(this.$store.getters.getModalCallback == true){
               //           this.$store.commit('deleteClientInfo', clientInfo)
               //           clearInterval(checkAnswer)
               //      }
               //      if(this.$store.getters.getModalCallback == false){
               //           clearInterval(checkAnswer)
               //      }
               // }, 500)
          
          }
     },
     computed: {
          pointsFixedZero(){
               return formating.fixedZero(this.cardInfo.points)
          },
          formatedGetBonusWord(){
               return formating.pointsGetBonusWord(this.cardInfo.points)
          },
          usePhoneMask(){
               return new PhoneMask(this.cardInfo.phone_number).forView()
          }
     }
}
</script>