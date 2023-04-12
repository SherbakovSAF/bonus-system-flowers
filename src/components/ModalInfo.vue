<template>
     <div class="absolute h-screen w-screen top-0 left-0 bg-bg-black">
          <div class="w-1/2 m-auto bg-main-bg mt-7 rounded-3xl h-1/2 max-lg:w-5/6 max-lg:h-1/3">
               <div class="h-full p-10 text-center flex flex-col justify-between">
                    <h1 class="font-medium text-2xl flex justify-center items-center text-main-color-text h-full max-lg:text-xl">
                         {{ alertMessage }}
                    </h1>
                    <div>
                         <button @click="this.$store.commit('closeModalInfo')" 
                         class="font-semibold bg-card-bg px-12 py-3 rounded-full max-lg:text-sm cursor-pointer">Ок</button>
                         <button v-if="this.$store.state.modalInfo.type == 'confirm'" @click="this.$store.commit('closeModalInfo')" 
                         class="font-semibold bg-card-bg px-12 py-3 ml-6 rounded-full max-lg:text-sm cursor-pointer">Отмена</button>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name: "ModalInfo",
     props: {
          alertMessage: {
               type: String,
               required: true,
               default: function(){
                    return "Ошибка приложения. Обратитесь к разработчику"
               }
          }
     },
     data() {
          return {
          }
     },
}
</script>