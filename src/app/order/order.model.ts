class Order{
    constructor (
         public address:string, 
         public number:number,
         public optionalAddress, 
         public paymentMethod:string, 
         public orderItems:OrderItem[] = []){}
}

class OrderItem{
    constructor(public quantity:number, public menuId:string){}
}
export {Order, OrderItem}