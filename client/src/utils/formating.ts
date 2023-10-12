const formating = {
     pointsGetBonusWord(clientInfoPoints: number):string {
          const points = clientInfoPoints

          if (points % 10 === 1 && points % 100 !== 11) {
               return "бонус"
          }

          if (points % 10 >= 2 && points % 10 <= 4 && (points % 100 < 10 || points % 100 >= 20)) {
               return "бонуса"
          }

          return "бонусов"
     },
     fixedZero(points: number){
          return points % 1 === 0 ? points : points.toFixed(2)
     },
}
export default formating
