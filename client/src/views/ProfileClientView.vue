<template>
  <main class="max-sm:bg-main-bg">
    <div class="py-6">
      <article 
        class="bg-card-bg w-1/2 rounded-r-full flex justify-between items-center shadow-lg
          max-lg:w-2/3 max-sm:w-full">
        <div class="text-main-color-text px-8 py-7">
          <div class="person__main__block">
            <p class="text-xl">{{ selectedClient.name }}</p>
            <h2 class="text-2xl">{{ formatedNumber }}</h2>
          </div>
          <hr class="w-full h-1 border-main-green bg-main-green rounded-full">
          <div>
            <dl class="text-3xl align-middle flex items-center">
              <dt>{{ selectedClient.points }}</dt>
              &nbsp;
              <dd class="text-xl align-middle">{{ formatedBonusWord }}</dd>
            </dl>
            <dl class="flex items-center text-3xl">
                <dt>{{ selectedClient.total_purchase }}</dt>
                &nbsp;
                <dd class="text-xl align-middle flex items-center">
                  <p>сумма выкупа</p>
                  <img src="../assets/media/pig.svg" class="ml-2" alt="BonusLogo">
                </dd>  
            </dl>
          </div>
          <router-link :to="{path: 'InputInfo/editClientInfo?'}" 
            class="font-semibold w-1/2 px-2 mt-2 rounded-full border-2">
            Упр.
          </router-link>
        </div>
        <img src="../assets/media/flower.png" alt="Flowers" 
            class="justify-end mr-6 h-[150px]
              max-[500px]:absolute left-full -translate-x-full">
      </article>
    </div>
  
      <div class="flex justify-around py-6">
        <button v-for="btn in tabs" :key="btn.id" :class="{ 'bg-main-green': currentComponent === btn.component }" @click="currentComponent = btn.component"
          class="py-2 px-20 flex relative cursor-pointer text-white text-xl font-semibold rounded-full border-4 border-main-green
          max-md:px-15
          max-sm:px-10">
          {{ btn.title }}
        </button>
      </div>
      <component :is="currentComponent" />
  </main>
  <modal-window v-if="isModal" 
  alertMessage="Выбранный клиент не найден. Обратитесь к разработчику" 
  typeModal="alert"
  @responseModalWindow="closeModal"/>
</template>

<script lang="ts">
// Компоненты
import NEW from '@/components/NewPurchase.vue'
import HISTORY from '@/components/HistoryPurchase.vue'
import ModalWindow from '@/UI/ModalWindow.vue'

// Утилиты
import Formating from '@/utils/formating'
import PhoneMask from '@/utils/phoneMask'

// Типизация
import { defineComponent } from 'vue'
import type { ClientInfo } from '@/interfaces'

interface tabs {
  id: number,
  component: string,
  title: string
}

export default defineComponent({
  name: "ProfileClientView",
  components: { NEW, HISTORY, ModalWindow },
  data() {
    return {
      selectedClient: {} as ClientInfo,
      currentComponent: 'NEW' as string,
      tabs: [
        { id: 0, component: 'NEW', title: 'Новая покупка' },
        // { id: 1, component: 'HISTORY', title: 'История покупок' }, // Массив с продажами ещё не доходит. Он просто не приходит с БД, так как там ForEach
      ] as Array<tabs>,
      isModal: false as boolean,
    }
  },
  computed: {
    formatedPoints() {
      return new Formating(this.selectedClient.points).fixedZero()
    },
    formatedBonusWord() {
      return new Formating(this.selectedClient.points).pointsGetBonusWord()
    },
    formatedNumber(){
      return new PhoneMask(this.selectedClient.phone_number).forView()
    }
  },
  methods: {
    closeModal(){
      this.isModal = false
      this.$router.push({path: '/'})
    }
  },
  created: function () {
    const selectedClientStore = this.$store.state.selectedClient
    selectedClientStore  ? this.selectedClient = selectedClientStore : this.isModal = true    
  },
})
</script>