<template>
     <form class="flex flex-col gap-y-7">
          <MainInputUI v-model="sumPurchase" placeholder="Введите сумму покупки" type="tel" maxSize="10"/>
               <div class="flex justify-around">     
                    <label v-for="option in options" :key="option.id" class="flex cursor-pointer" >
                         <input v-model="typeOperationPoint" type="radio" name="bonusAction" :value="option.value"
                              class="peer/bonusAction hidden">
                         <div class="w-6 h-6 rounded-full box-border border-main-green border-[6px] bg-transparent mr-1"
                         :class="{ 'peer-checked/bonusAction:bg-main-green': typeOperationPoint === option.value }"></div>
                         <h3 class="text-lg text-main-green">{{ option.label }}</h3>
                    </label>
               </div>
               <div v-if="typeOperationPoint == 'SUB'">
                    <MainInputUI v-model="subBonus" placeholder="Сколько бонусов списать?" type="tel" maxSize="10"/>
                    <h2 class="font-medium text-main-color-text w-1/3 text-end max-lg:m-auto max-lg:w-2/3 max-lg:text-sm max-sm:text-center">
                         {{ formatingHintForSeller }}
                    </h2>
               </div>
          <MainInputUI v-model="listPurchase" placeholder="Что купил клиент? (необязательно)" type="text" maxSize="50"/>
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
          max-lg:m-auto max-lg:w-2/3">
               <img src="@/assets/media/bouquetInput.svg" alt="logo" class="mr-3">
               <select class="outline-0 w-full font-medium text-[#686767] text-1xl" v-model="salesman">
                    <!-- value="" в первом option надо чтобы он был как selected, иначе поле будет пустое -->
                    <option class="text-[#686767] text-lg" value="" disabled>Кто продал</option>
                    <option class="text-[#686767] text-lg">Надя</option>
                    <option class="text-[#686767] text-lg">Вика</option>
               </select>
          </div>
          <button :disabled="typeOperationPoint == 'SUB' && getSubBonus < 0" @click="addingNewPurchase" type="submit"
          class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
          max-sm:w-2/3">
               Отправить
          </button>
     </form>
</template>

<script lang="ts">
// Компоненты
import MainInputUI from '@/UI/MainInputUI.vue';

// Типизация
import { defineComponent } from 'vue';
import { NewPurchase } from '@/interfaces';

export default defineComponent ({
     name: 'NewPurchase',
     components: {MainInputUI},
     data() {
          return {
               sumPurchase: null,
               subBonus: null,
               listPurchase: "",
               salesman: "",
               typeOperationPoint: 'SUB', // or "SUB"
               options: [
                    { id: 0, label: 'Начислить', value: 'PLUS' },
                    { id: 1, label: 'Списать', value: 'SUB' }
               ]
          }
     },
     computed: {
          formatingHintForSeller():string {
               if (this.getSumPurchase <= 0) return "Введите сумму покупки клиента"

               if (this.getSubBonus < 0) return "Количество бонусов должно быть больше 0"

               if (this.$store.state.selectedClient.points < this.getSubBonus) return "У клиента нет столько бонусов"

               if (this.getSumPurchase > 0 && !isNaN(this.getSumPurchase - this.getSubBonus)) {
                    return `Клиент должен заплатить Вам ${this.getSumPurchase - this.getSubBonus}₽`
               }

               return "Введите корректное значение"
          },
          // Данные computed нужны, чтобы обойти TS. И к тому же, чтобы изначально input были пустые.
          // Если поставить 0, вместо null, то пользователям придётся удалять этот 0 и писать
          // Можно это сделать, манипулирую props и emit на кастоме input, но это может усложнить логику
          getSumPurchase(){
               return this.sumPurchase !== null ? this.sumPurchase : 0
          },
          getSubBonus(){
               return this.subBonus !== null ? this.subBonus : 0
          }
     },
     methods: {
          addingNewPurchase() {
               const date = Date.now()
               const newPurchaseTemplate: NewPurchase = {
                    sumPurchase: this.getSumPurchase,
                    typeOperationPoint: this.typeOperationPoint, // or "PLUS"
                    subBonus: this.getSubBonus,
                    plusBonus: Number((this.getSumPurchase * 0.1).toFixed(2)),
                    listPurchase: this.listPurchase,
                    salesman: this.salesman,
                    date: date,
               }

               // if (newPurchaseTemplate.typeOperationPoint == "SUB" && this.$store.state.selectedClient.points < newPurchaseTemplate.subBonus) {
               //      this.$store.commit('activeModalInfo', {text: 'Количество списываем бонусов превышает сумму бонусов клиента'})
               //      this.addNewPurchase.subBonus = ""
               //      return
               // }

               this.$store.commit("addNewPurchaseClient", newPurchaseTemplate)
               this.$router.push({ path: "/" })
          }
     },
})
</script>