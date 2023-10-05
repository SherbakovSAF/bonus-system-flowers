<template>
     <div class="w-1/3 bg-white rounded-full flex py-3 px-4
               max-lg:w-1/2
               max-sm:w-[90%]">
          <img src="@/assets/media/bouquetInput.svg" alt="ClientNumberInput" class="mr-3">
          <input class="outline-0 w-full font-medium text-[#686767] text-xl" 
               :maxlength="maxSize" :type="type" 
               :placeholder="placeholder"
               :value="modelValue"
               @input="$emit('update:modelValue', usePhoneMask($event.target.value))">
     </div>
</template>

<script>
import PhoneMask from '@/utils/phoneMask';

export default {
     name: 'PhoneInputUI',
     props: {
          modelValue: {type: String},
          placeholder: {type: String, required: false, default: 'Введите значение'},
          type: {type: String, required: true},
          maxSize: {type: String, required: false, default: '50'}
     },
     emits: ['update:modelValue'],
     methods: {
          usePhoneMask(inputValue){
               switch (this.type) {
                    case 'tel':
                         return new PhoneMask(inputValue).forView()
                    default:
                         return inputValue
               }
          }
     }
}
</script>