export default class Validate {
     value:string
     constructor(value: string){
          this.value = value
     }

     isEmpty():boolean{
          return this.value.length <= 0
     }

     isNegativeValues():boolean{
          return Number(this.value) < 0
     }

}