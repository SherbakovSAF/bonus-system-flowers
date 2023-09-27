<template>
  <main class="max-sm:bg-main-bg">
    <div class="py-6">
      <article 
        class="bg-card-bg w-1/2 rounded-r-full flex justify-between items-center shadow-lg
          max-lg:w-2/3 max-sm:w-full">
        <div class="text-main-color-text px-8 py-7">
          <div class="person__main__block">
            <p class="text-xl">{{ selectedClient.name }}</p>
            <h2 class="text-2xl">{{ selectedClient.phone_number}}</h2>
          </div>
          <hr class="w-full h-1 border-main-green bg-main-green rounded-full">
          <div>
            <dl class="text-3xl align-middle flex items-center">
              <dt>{{ selectedClient.points }}</dt>
              &nbsp;
              <dd class="text-xl align-middle">{{ formatedGetBonusWord }}</dd>
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
          <router-link to="inputInfo/editClientInfo">
            <button class="font-semibold w-1/2 mt-2 rounded-full border-2">Упр.</button>
          </router-link>
        </div>
        <img src="../assets/media/flower.png" alt="Flowers" 
            class="justify-end mr-6 h-[150px]
              max-[500px]:absolute left-full -translate-x-full">
      </article>
    </div>

    <div class="flex justify-around py-6">
      <button v-for="btn in tabs" :key="btn.id" :class="{'bg-main-green': currentComponent === btn.component}" @click="currentComponent = btn.component"
        class="py-2 px-20 flex relative cursor-pointer text-white text-xl font-semibold rounded-full border-4 border-main-green
        max-md:px-15
        max-sm:px-10">
        {{ btn.title }}
      </button>
    </div>
    <component :is="currentComponent" />
  </main>
</template>

<script>
import NEW from '@/components/NewPurchase.vue'
import HISTORY from '@/components/HistoryPurchase.vue'

import formating from '@/utils/formating'

export default {
  name: "ProfileClientView",
  components: {
    NEW,
    HISTORY,
  },
  data() {
    return {
      selectedClient: {},
      currentComponent: 'NEW',
      tabs: [
        { id: 0, component: 'NEW', title: 'Новая покупка' },
        // { id: 1, component: 'HISTORY', title: 'История покупок' }, // Массив с продажами ещё не доходит. Он просто не приходит с БД, так как там ForEach
      ]
    }
  }, 
  computed: {
    formatPoints(){
      return formating.fixedZero(this.selectedClient.points)
    },
    formatedGetBonusWord(){
      return formating.pointsGetBonusWord(this.selectedClient.points)
    },
    aa(){
      return this.$store.state.selectedClient
    }
  },
  created: function(){
    this.selectedClient = this.$store.state.selectedClient
  }, 
}
</script>