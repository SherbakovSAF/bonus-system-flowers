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
               <form class="flex justify-center mt-5 ">
                    <main-input-UI v-model="numberInput" type="tel" maxSize="16"/>
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

export default defineComponent({
     name: "HomeView",
     components: { ClientCard, CreateClientCard, MainLoaderUI, MainInputUI },
     data() {
          return {
               numberInput: '' as string,
               isLoader: true as boolean,
               isClientsFound: false as boolean,
               timer: null as ReturnType<typeof setTimeout> | null,
          }
     },
     methods: {
          delayedStart() {
               if(this.numberInput.length < 8) return
               if (this.timer) clearTimeout(this.timer);
               this.timer = setTimeout(this.executeRequest, 1000);
          },
          async executeRequest(): Promise<void> {
               try {
                    this.isLoader = true
                    await this.$store.dispatch('getClientStorageFromDB', this.useMaskPhone)
               } catch (error) {
                    alert('Получение клиентов не удалось')
               } finally {
                    this.isLoader = false
               }
          }
     },
     computed: {
          filterClientNumber(): Array<ClientInfo> {
               return this.$store.state.clientStorage.filter((e: ClientInfo) => e.phone_number.startsWith(this.useMaskPhone))
          },
          useMaskPhone(): string {
               return new PhoneMask(this.numberInput).forDateBase()
          },
     },
     watch: {
          numberInput() {
               this.delayedStart()
          }
     }
}
)
</script>