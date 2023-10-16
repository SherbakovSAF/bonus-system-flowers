class Formating {
     value: number;

     constructor(value: number){
          this.value = value
     }

     pointsGetBonusWord():string {
          const points = this.value;

          if (points % 10 === 1 && points % 100 !== 11) {
               return "бонус";
          }

          if (points % 10 >= 2 && points % 10 <= 4 && (points % 100 < 10 || points % 100 >= 20)) {
               return "бонуса";
          }

          return "бонусов";
     }

     fixedZero():number{
          const points = this.value
          return points % 1 === 0 ? points : Number(points.toFixed(2));
     }
}
export default Formating
