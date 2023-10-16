export interface clientInfo{
     id: number,
     phone_number: string,
     name: string,
     points: number,
     total_purchase: number,
     reg_date: number
}

export interface newPurchase{
     sumPurchase: number,
     typeOperationPoint: string, // or "PLUS"
     subBonus: number,
     plusBonus: number,
     listPurchase: string,
     salesman: string,
     date: number
}