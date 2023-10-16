<template>
     <form class="py-3">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                                             max-lg:m-auto max-lg:w-2/3
                                             ">
               <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
               <input class="outline-0 w-full font-medium text-[#686767] text-1xl max-sm:text-sm" maxlength="14" type="tel"
                    placeholder="Введите сумму покупки" v-model="sumPurchase">
          </div>
     </form>
     <div class="flex justify-around">
          <label class="flex py-3 cursor-pointer">
               <input v-model="typeOperationPoint" type="radio" name="bonusAction" value="PLUS"
                    class="peer/bonusAction hidden">
               <div
                    class="w-6 h-6 rounded-full box-border border-main-green border-[6px] bg-transparent mr-1 peer-checked/bonusAction:bg-main-green">
               </div>
               <h3 class="text-lg text-main-green">Начислить</h3>
          </label>
          <label class="flex py-3 cursor-pointer">
               <input v-model="typeOperationPoint" type="radio" name="bonusAction" value="SUB"
                    class="peer/bonusAction hidden">
               <div class="w-6 h-6 rounded-full box-border border-main-green border-[6px] bg-transparent mr-1 peer-checked/bonusAction:bg-main-green"></div>
               <h3 class="text-lg text-main-green">Списать</h3>
          </label>
     </div>
     <form class="py-4" v-if="typeOperationPoint == 'SUB'">
          <div>
               <div class="bg-white rounded-full flex py-3 px-4 w-1/3 
                    max-lg:m-auto max-lg:w-2/3 ">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                                             max-sm:text-sm" maxlength="14" type="tel"
                         placeholder="Сколько бонусов списать?" v-model="subBonus">
               </div>
               <h2 class="font-medium text-main-color-text w-1/3 text-end max-lg:m-auto max-lg:w-2/3 max-lg:text-sm max-sm:text-center">
                    {{ formatingHintForSeller }}
               </h2>
          </div>

     </form>
     <form class="py-4">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                    max-lg:m-auto max-lg:w-2/3">
               <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
               <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                                             max-sm:text-sm" maxlength="14" type="tel"
                    placeholder="Что купил клиент? (необязательно)" v-model="listPurchase">
          </div>
     </form>
     <form class="py-4">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                                        max-lg:m-auto max-lg:w-2/3
                                        ">
               <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
               <select class="outline-0 w-full font-medium text-[#686767] text-1xl" v-model="salesman">
                    <option class="text-[#686767] text-lg opacity-10" disabled value="">Кто продал</option>
                    <option class="text-[#686767] text-lg">Надя</option>
                    <option class="text-[#686767] text-lg">Вика</option>
               </select>
          </div>
     </form>
     <button :disabled="typeOperationPoint == 'SUB' && getSubBonus < 0" @click="addingNewPurchase"
          type="submit" class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
                                   max-sm:w-2/3">Отправить</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { NewPurchase } from '@/interfaces';

export default defineComponent ({
     name: 'NewPurchase',
     data() {
          return {
               sumPurchase: null,
               typeOperationPoint: 'PLUS', // or "PLUS"
               subBonus: null,
               listPurchase: "",
               salesman: "",
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
          // validForm() {
          //      // Проверка на обязательные поля В ЛЮБОМ СЛУЧАЕ
          //      if (this.addNewPurchase.salesman == "" || +this.addNewPurchase.sum <= 0) {
          //           this.$store.commit('activeModalInfo', {text:'Введена некорректная сумма или не выбран продавец'})
          //           return false
          //      }
          //      // Проверка на обязательные поля В СЛУЧАЕ СПИСАНИЯ
          //      if (this.addNewPurchase.typeBonus == "SUB" && +this.addNewPurchase.subBonus <= 0) {
          //           this.$store.commit('activeModalInfo', {text: 'Введите сумму для списания'})
          //           return false
          //      }
          //      if (this.addNewPurchase.sumPurchase <= 0 || isNaN(+this.addNewPurchase.sumPurchase)) {
          //           this.$store.commit('activeModalInfo', {text: 'Сумма покупки некорректна'})
          //           this.addNewPurchase.sumPurchase = ""
          //           return false
          //      }
          //      return true
          // },
          addingNewPurchase() {
               // Проверка на срабатывания функции валидации. Если валидация не выполнена, тогда функция дополнения выполняться не будет
               // if (!this.validForm()) {
               //      return
               // }

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
     // created(){
     //      console.log(this.$store.state.selectedClient)
     // },
})
</script>