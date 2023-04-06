<template>
     <article 
     class="bg-card-bg w-1/2 rounded-r-full shadow-lg
     max-lg:w-2/3 max-sm:w-full">
          <div class="flex justify-between items-center">
               <div class="text-main-color-text px-8 py-7">
                    <div class="person__main__block">
                         <h2 class="text-xl">{{ selectedClient.name ? selectedClient.name : "Имя нового клиента" }}</h2>
                         <h2 class="text-2xl">{{ selectedClient.number ? selectedClient.number : "Номер нового клиента"}}
                         </h2>
                    </div>
               </div>
               <img 
               src="../assets/media/flower.png" alt="" 
               class="justify-end mr-6 h-[150px]
               max-[500px]:absolute left-full -translate-x-full">
          </div>
          <button v-if="$route.params.typeChangeClientInfo == 'editClientInfo'"
          class="text-center w-full font-medium py-2 border">Удалить</button>
     </article>


     <div>
          <form class="py-4">
               <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4
                         max-lg:m-auto max-lg:w-2/3">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                              max-sm:text-sm" maxlength="14" type="tel" :placeholder="placeholderName" v-model="clientName">
               </div>
          </form>
          <form class="py-4">
               <div class="w-1/3 max-md:w-[90%] bg-white rounded-full flex py-3 px-4
                         max-lg:m-auto max-lg:w-2/3">
                    <img src="../assets/media/bouquetInput.svg" alt="" class="mr-3">
                    <input class="outline-0 w-full font-medium text-[#686767] text-1xl
                              max-sm:text-sm" maxlength="14" type="tel" :placeholder="placeholderNumber" autofocus
                         v-model="selectedClient.number">
               </div>
          </form>
     </div>
     <button @click="valid" type="submit" class="bg-main-green text-white text-base font-semibold mt-6 rounded-full py-4 w-1/3 block m-auto
     max-sm:w-2/3">Отправить</button>
</template>

<script>
export default {
     name: "EditClientInfo",
     data() {
          return {
               placeholderName: "",
               placeholderNumber: "",
               clientName: "",
               selectedClient: {}
          }
     },
     methods: {
          valid(){
               if(!this.selectedClient.name || !this.selectedClient.number){
                    alert("Поля имени клиента или номера - пусты")
                    return false
               }
          }
     },
     mounted() {
          if (this.$route.params.typeChangeClientInfo == "regnewclient") {
               this.placeholderName = "Введите новое имя клиента"
               this.placeholderNumber = "Введите новый номер клиента"
               this.selectedClient.number = this.$store.state.newClientNumber
               this.selectedClient.name = ""
               this.$store.commit("clearNewClientNumber")
          }

          if (this.$route.params.typeChangeClientInfo == "editClientInfo") {
               this.selectedClient = this.$store.state.selectedClient
               this.placeholderName = "Введите нового имя клиента"
               this.placeholderNumber = "Введите новый номер клиента"
          }
     }
}
</script>

<!-- methods:{
     addNewClient(){
          const newClientInfo = {
               number: this.numberNewClient,
               name: this.nameNewClient,
               points: 0,
               totalAmount: 0,
               purchaseHistory: [
               ]
          }
          if(this.$store.state.clientStorage.find(e => e.number == this.numberNewClient) != undefined){
               alert(`Номер ${this.numberNewClient} уже есть в базе. Проверьте правильность написания`)
               return
          }
          this.$store.commit("addNewClient", newClientInfo)
     }
}, -->