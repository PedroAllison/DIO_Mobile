import createItem  from "./services/item.js";
import * as cartService from './services/cart.js'

const myCart = [];
const myWhishList = [];

console.log("\nWelcome to the your Shopee Cart! ")

//CRIANDO 2 ITENS
const item1 = await createItem("hotwheels ferrari" , 20.99, 2)
const item2 = await createItem("hotwheels lambo" , 39.99, 3)

//ADICIONAR ITENS AO CARRINHO
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
//await cartService.addItem(myWhishList, item2)

//REMOVER 1 ITEM NEW
await cartService.removeItem(myCart, item2)

//REMOVER 1 ITEM OLD
//await cartService.removeItem(myCart, 1)
//await cartService.displayCart(myCart)

//DELETAR ITENS DO CARRINHO
// await cartService.deleteItem(myCart, item1.name)
// await cartService.deleteItem(myWhishList, item2.name)

console.log(item1.subtotal())
console.log(item2.subtotal())


//console.log(`Teu carrinho dos desejos: ${myWhishList}`)
await cartService.calculateTotal(myCart)

