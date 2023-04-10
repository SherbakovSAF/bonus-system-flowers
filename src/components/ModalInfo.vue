<template>
     <div class="absolute h-screen w-screen top-0 left-0 bg-bg-black">
          <div class="w-1/2 m-auto bg-main-bg mt-7 rounded-3xl  h-1/2">
               <div class="h-full p-10 text-center flex flex-col justify-between">
                    <h1 class="font-medium text-2xl flex justify-center items-center text-main-color-text h-full">
                         {{ alertMessage }}
                    </h1>
                    <button class="font-semibold bg-card-bg px-12 py-3 rounded-full">Всё понятно</button>
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