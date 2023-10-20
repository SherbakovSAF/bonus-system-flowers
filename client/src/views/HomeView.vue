<template>
          <div>
               <main-loader-UI v-if="isLoader"/>
               <div v-else>
                    <!-- if и for вместе не рекомендуется использовать -->
                    <div v-if="filterClientNumber.length">
                         <client-card v-for="card in filterClientNumber" :key="card.id" :cardInfo="card"/>
                    </div>
                    <create-client-card v-else :newClientNumber="numberInput"/>
               </div>
               <form class="flex flex-col items-center justify-center mt-5">
                    <main-input-UI v-model="numberInput" type="tel" maxSize="16"/>
                    <p class="font-medium text-main-color-text">{{ hint }}</p>
               </form>
          </div>
</template>


<script lang="ts">
// Компоненты проекта
import ClientCard from '@/components/ClientCard.vue'
import CreateClientCard from '@/components/CreateClientCard.vue'
import MainLoaderUI from '@/UI/MainLoaderUI.vue'
import MainInputUI from '@/UI/MainInputUI.vue'

// Утилиты
import PhoneMask from '@/utils/phoneMask';

// Типизиация
import { defineComponent } from 'vue';
import type { ClientInfo } from '@/interfaces'
import { mapState } from 'vuex';

export default defineComponent({
     name: "HomeView",
     components: { ClientCard, CreateClientCard, MainLoaderUI, MainInputUI },
     data() {
          return {
               numberInput: '' as string,
               isLoader: true as boolean,
               isClientsFound: false as boolean,
               timer: null as ReturnType<typeof setTimeout> | null,
               hint: '' as string,
          }
     },
     methods: {
          delayedStart() {
               if (this.timer) clearTimeout(this.timer);
               this.timer = setTimeout(this.executeRequest, 1000);
          },
          async executeRequest() {
               try {
                    this.isLoader = true
                    this.hint = 'Происходит запрос'
                    await this.$store.dispatch('getClientStorageFromDB', this.useMaskPhone)
                    this.hint = `Запрос выполнен`
               } catch (error) {
                    this.hint = 'Ошибка запроса'
               } finally {
                    this.isLoader = false
               }
          }
     },
     computed: {
          filterClientNumber(): Array<ClientInfo> {
               return this.clientStorage.filter((e: ClientInfo) => e.phone_number.startsWith(this.useMaskPhone))
          },
          useMaskPhone(): string {
               return new PhoneMask(this.numberInput).forDateBase()
          },
          ...mapState(['clientStorage'])
     },
     watch: {
          numberInput() {
               // Поменять < на >. Чтобы запрос делался с 8 символов. Было изменено для разработки
               if(this.numberInput.length < 8) this.delayedStart()
          }
     }
}
)
</script>