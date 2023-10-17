<template>
     <article class="bg-[#FBDCD7] w-1/2 rounded-r-full shadow-lg mt-6 flex justify-around items-center cursor-pointer
          max-[500px]:relative
          max-lg:w-2/3 max-sm:w-full"
          @click="selectClient">
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
          <button @click.stop="isModalActive = true">
               <img src="@/assets/media/clear.svg"
                    class="w-16 h-16 bg-main-green rounded-full p-1" alt="DeleteClientInfo" />
          </button>
          
     </article>
     <ModalWindow v-if="isModalActive" @responseModalWindow="confirmModalResponse"
          typeModal="confirm" 
          alertMessage="Вы действительно хотите удалить информацию о клиенте?"/>
</template>

<script lang="ts">
// Компоненты
import ModalWindow from './ModalWindow.vue';

// Утилиты
import Formating from '@/utils/formating'
import PhoneMask from '@/utils/phoneMask'

// Типизация TypeScript
import { defineComponent } from 'vue';
import type { ClientInfo } from '@/interfaces';

export default defineComponent({
     name: "ClientCard",
     components: {ModalWindow},
     data(){
          return {
               isModalActive: false as boolean, 
          }
     },
     props: {
          cardInfo: {type: Object as ()=> ClientInfo, required: true} 
     },
     methods: {
          confirmModalResponse (event: boolean){
               if(event) this.deleteClientInfo()
               this.isModalActive = false
          },
          selectClient(): void{
               this.$store.commit('selectClient', this.cardInfo.id)
               console.log('Я сработал')
               this.$router.push({path: "profile"})
          },
          deleteClientInfo(){
               try {
                    this.$store.dispatch('deleteClient', this.cardInfo.id)
               } catch (error) {
                    alert('Ошибка. Информация о клиенте не была удалена')
               }
          }
     },
     computed: {
          pointsFixedZero(): number{
               return new Formating(this.cardInfo.points).fixedZero()
          },
          formatedGetBonusWord(): string{
               return new Formating(this.cardInfo.points).pointsGetBonusWord()
          },
          usePhoneMask(): string{
               return new PhoneMask(this.cardInfo.phone_number).forView()
          }
     }
})
</script>