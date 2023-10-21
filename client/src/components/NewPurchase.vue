<template>
     <form class="flex flex-col gap-y-7">
          <MainInputUI v-model="sumPurchase" placeholder="Введите сумму покупки" type="number" maxSize="10"/>
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
               <MainInputUI v-model="subBonus" placeholder="Сколько бонусов списать?" type="number" maxSize="10"/>
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
          <button :disabled="!disabledBtn" @click="addingNewPurchase"
          class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto disabled:opacity-50
          max-sm:w-2/3">
               {{ disabledBtn ? 'Отправить' : 'Поля не заполнены или неккоретны' }}
          </button>
     </form>
</template>

<script lang="ts">
// Компоненты
import MainInputUI from '@/UI/MainInputUI.vue';

// Утилиты
import Validate from '@/utils/validate'

// Типизация
import { defineComponent } from 'vue';
// import { NewPurchase } from '@/interfaces';

export default defineComponent ({
     name: 'NewPurchase',
     components: {MainInputUI},
     props: {
          clientPoints: {type: Number, required: true}
     },
     data() {
          return {
               sumPurchase: '' as string,
               subBonus: '' as string,
               listPurchase: "" as string,
               salesman: "" as string,
               typeOperationPoint: 'SUB' as string, // or "SUB"
               options: [
                    { id: 0, label: 'Начислить', value: 'PLUS' },
                    { id: 1, label: 'Списать', value: 'SUB' }
               ] as Array<{id: number, label: string, value: string}>,
          }
     },
     computed: {
          // Пустота, отрицательные значения
          formatingHintForSeller():string {
               if(!this.isValidate) return 'Введите корректные значения'
               if(!this.isCurrentSubPoint) return 'Столько бонусов списать нельзя'
               if( this.isHavePoints) {
                    return `Клиент должен заплатить Вам ${this.calcPoints}₽`
               } else {
                    return 'У клиента нет столько бонусов'
               }
          },
          isValidate(): boolean{
               const validations = [
                    new Validate(this.sumPurchase).isEmpty(),
                    new Validate(this.sumPurchase).isNegativeValues(),
                    new Validate(this.subBonus).isNegativeValues(),
                    new Validate(this.salesman).isEmpty()
               ];

               return validations.every(e => !e);
          },

          isHavePoints():boolean{
               return this.clientPoints >= this.getSubBonus
          },
          isCurrentSubPoint(){
               // В дальнейшнем тут можно изменить, чтобы нельзя было списать больше 30% от общих бонусов и т.д
               return this.calcPoints > 0
          },
          calcPoints():number{
               return this.getSumPurchase - Number(this.subBonus)
          },
          disabledBtn():boolean{
               const conditions = [this.isValidate, this.isHavePoints, this.isCurrentSubPoint]
               console.log(conditions)
               return conditions.every(e=> e)
          },

          // Данные computed нужны, чтобы обойти TS. И к тому же, чтобы изначально input были пустые.
          // Если поставить 0, вместо null, то пользователям придётся удалять этот 0 и писать
          // Можно это сделать, манипулирую props и emit на кастоме input, но это может усложнить логику
          getSumPurchase(): number{
               return this.sumPurchase !== null ? Number(this.sumPurchase) : 0
          },
          getSubBonus(): number{
               return this.subBonus !== null ? Number(this.subBonus) : 0
          }
     },
     methods: {
          addingNewPurchase() {
               // Проверка поллей
               console.log('Отправили')
               // const date = Date.now()
               // const newPurchaseTemplate: NewPurchase = {
               //      sumPurchase: Number(this.getSumPurchase),
               //      typeOperationPoint: this.typeOperationPoint, // or "PLUS"
               //      subBonus: Number(this.getSubBonus),
               //      plusBonus: Number((Number(this.getSumPurchase) * 0.1).toFixed(2)),
               //      listPurchase: this.listPurchase,
               //      salesman: this.salesman,
               //      date: date,
               // }

               // this.$store.commit("addNewPurchaseClient", newPurchaseTemplate)
               // this.$router.push({ path: "/" })
          }
     },
})
</script>