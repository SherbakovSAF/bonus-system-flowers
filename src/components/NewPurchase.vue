<template>
     <form class="py-3">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                                             max-lg:m-auto max-lg:w-2/3
                                             ">
               <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
               <input class="outline-0 w-full font-medium text-[#686767] text-1xl max-sm:text-sm" maxlength="14" type="tel"
                    placeholder="Введите сумму покупки" v-model="addNewPurchase.sumPurchase">
          </div>
     </form>
     <div class="flex justify-around">
          <label class="flex py-3 cursor-pointer">
               <input v-model="addNewPurchase.typeOperationPoint" type="radio" name="bonusAction" value="PLUS"
                    class="peer/bonusAction hidden">
               <div
                    class="w-6 h-6 rounded-full box-border border-[#305346] border-[6px] bg-transparent mr-1 peer-checked/bonusAction:bg-[#305346]">
               </div>
               <h3 class="text-lg text-[#305346]">Начислить</h3>
          </label>
          <label class="flex py-3 cursor-pointer">
               <input v-model="addNewPurchase.typeOperationPoint" type="radio" name="bonusAction" value="SUB"
                    class="peer/bonusAction hidden">
               <div class="w-6 h-6 rounded-full box-border border-[#305346] border-[6px] bg-transparent mr-1 peer-checked/bonusAction:bg-[#305346]"></div>
               <h3 class="text-lg text-[#305346]">Списать</h3>
          </label>
     </div>
     <form class="py-4" v-if="addNewPurchase.typeOperationPoint == 'SUB'">
          <div>
               <div class="bg-white rounded-full flex py-3 px-4 w-1/3 
                    max-lg:m-auto max-lg:w-2/3 ">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                                             max-sm:text-sm" maxlength="14" type="tel"
                         placeholder="Сколько бонусов списать?" v-model="addNewPurchase.subBonus">
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
                    placeholder="Что купил клиент? (необязательно)" v-model="addNewPurchase.listPurchase">
          </div>
     </form>
     <form class="py-4">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                                        max-lg:m-auto max-lg:w-2/3
                                        ">
               <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
               <select class="outline-0 w-full font-medium text-[#686767] text-1xl" v-model="addNewPurchase.salesman">
                    <option class="text-[#686767] text-lg opacity-10" disabled value="">Кто продал</option>
                    <option class="text-[#686767] text-lg">Надя</option>
                    <option class="text-[#686767] text-lg">Вика</option>
               </select>
          </div>
     </form>
     <button :disabled="addNewPurchase.typeOperationPoint == 'SUB' && addNewPurchase.subBonus < 0" @click="addingNewPurchase"
          type="submit" class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
                                   max-sm:w-2/3">Отправить</button>
</template>
<script>

export default {
     name: 'NewPurchase',
     data() {
          return {
               addNewPurchase: {
                    sumPurchase: null,
                    typeOperationPoint: 'PLUS', // or "PLUS"
                    subBonus: null,
                    listPurchase: "",
                    salesman: ""
               }
          }
     },
     computed: {
          formatingHintForSeller() {
               if (this.addNewPurchase.sumPurchase <= 0) {
                    return "Введите сумму покупки клиента"
               }

               if (this.addNewPurchase.subBonus < 0) {
                    return "Количество бонусов должно быть больше 0"
               }

               if (this.$store.state.selectedClient.points < this.addNewPurchase.subBonus) {
                    return "У клиента нет столько бонусов"
               }

               if (this.addNewPurchase.sumPurchase > 0 && !isNaN(this.addNewPurchase.sumPurchase - this.addNewPurchase.subBonus)) {
                    return `Клиент должен заплатить Вам ${this.addNewPurchase.sumPurchase - this.addNewPurchase.subBonus}₽`
               }

               return "Введите корректное значение"


          }
     },
     methods: {
          validForm() {
               // Проверка на обязательные поля В ЛЮБОМ СЛУЧАЕ
               if (this.addNewPurchase.salesman == "" || +this.addNewPurchase.sum <= 0) {
                    this.$store.commit('activeModalInfo', 'Введена некорректная сумма или не выбран продавец')
                    return false
               }
               // Проверка на обязательные поля В СЛУЧАЕ СПИСАНИЯ
               if (this.addNewPurchase.typeBonus == "SUB" && +this.addNewPurchase.subBonus <= 0) {
                    this.$store.commit('activeModalInfo', 'Введите сумму для списания')
                    return false
               }
               if (this.addNewPurchase.sumPurchase <= 0 || isNaN(+this.addNewPurchase.sumPurchase)) {
                    this.$store.commit('activeModalInfo', 'Сумма покупки некорректна')
                    this.addNewPurchase.sumPurchase = ""
                    return false
               }
               return true
          },
          addingNewPurchase() {
               // Проверка на срабатывания функции валидации. Если валидация не выполнена, тогда функция дополнения выполняться не будет
               if (!this.validForm()) {
                    return
               }

               const date = new Date()
               const formatData = `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`

               const newPurchaseTemplate = {
                    date: formatData,
                    sumPurchase: this.addNewPurchase.sumPurchase,
                    typeOperationPoint: this.addNewPurchase.typeOperationPoint, // or "PLUS"
                    subBonus: this.addNewPurchase.subBonus,
                    plusBonus: (this.addNewPurchase.sumPurchase * 0.1).toFixed(2),
                    listPurchase: this.addNewPurchase.listPurchase,
                    salesman: this.addNewPurchase.salesman
               }

               if (newPurchaseTemplate.typeOperationPoint == "SUB" && this.$store.state.selectedClient.points < newPurchaseTemplate.subBonus) {
                    this.$store.commit('activeModalInfo', 'Количество списываем бонусов превышает сумму бонусов клиента')
                    this.addNewPurchase.subBonus = ""
                    return
               }

               this.$store.commit("addNewPurchaseClient", newPurchaseTemplate)
               this.$router.push({ path: "/" })
          }
     },
     // created(){
     //      console.log(this.$store.state.selectedClient)
     // },
}
</script>