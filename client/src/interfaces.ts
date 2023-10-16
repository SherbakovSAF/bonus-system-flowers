export interface ClientInfo{
     id: number,
     phone_number: string,
     name: string,
     points: number,
     total_purchase: number,
     reg_date: number
}

export interface NewPurchase{
     sumPurchase: number,
     typeOperationPoint: string, // or "PLUS"
     subBonus: number,
     plusBonus: number,
     listPurchase: string,
     salesman: string,
     date: number
}