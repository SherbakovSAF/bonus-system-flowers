class PhoneMask{
     number: string;
     constructor(number:string){
          this.number = number
     }

     forView():string{
          let inputNumbersValue:string = this.number.replace(/\D/g, '');
          let formattedInputValue:string = '';
          const firstSymbols = '+7'

          if (!inputNumbersValue) {
               return '';
          }
     
          if (["7", "8", "9"].indexOf(inputNumbersValue[0]) < -1) {
               return '+' + inputNumbersValue.substring(0, 16);
          } 

          if (inputNumbersValue[0] == "9") {
               inputNumbersValue = "7" + inputNumbersValue;
          }

          formattedInputValue = firstSymbols;
          if (inputNumbersValue.length > 1) {
               formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
          }
          if (inputNumbersValue.length >= 5) {
               formattedInputValue += ')' + inputNumbersValue.substring(4, 7);
          }
          if (inputNumbersValue.length >= 8) {
               formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
          }
          if (inputNumbersValue.length >= 10) {
               formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
          }
     
          return formattedInputValue;
     }

     forDateBase():string{
          return this.number.replace(/\D/g, '');
     }
     
}

export default PhoneMask
