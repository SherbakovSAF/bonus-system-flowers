<template>
     <form class="flex justify-center mt-5 ">
          <div class="w-1/3 bg-white rounded-full flex py-3 px-4
                    max-lg:w-1/2
                    max-sm:w-[90%]">
               <img src="@/assets/media/bouquetInput.svg" alt="ClientNumberInput" class="mr-3">
               <input class="outline-0 w-full font-medium text-[#686767] text-xl" 
                    maxlength="16" type="tel" 
                    placeholder="Тут номер(От 8 символов)"
                    :value="modelValue"
                    @input="$emit('update:modelValue', usePhoneMask($event.target.value))">
          </div>
     </form>
</template>

<script>
import PhoneMask from '@/utils/phoneMask';

export default {
     name: 'PhoneInputUI',
     props: {
          modelValue: {type: String},
     },
     emits: ['update:modelValue'],
     methods: {
          usePhoneMask(number){
               return new PhoneMask(number).forView()
          }
     }
}
</script>