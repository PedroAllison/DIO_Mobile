//QUAIS AÇOES MEU CARRINHO PODE FAZER
// - ADICIONAR ITEM;
// - DELETER ITEM;
// - REMOVER ITEM;
// - CALCULAR TOTAL;

async function addItem(userCart, item) {
    //*PUSH* SERVE PARA ADICIONAR UM ELEMENTO NO FINAL DA LISTA
    userCart.push(item)
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1 ){
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, index) {

    const deleteItens = index -1;

    //VERIFICANDO SE É MAIOR QUE 0 E MANOR QUE O TAMANHO DO CARRINHO
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteItens,1)
    }
}

async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total is: ")
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
    console.log(result)
}

async function displayCart(userCart) {
    console.log("Shopee Cart List: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Quantity: ${item.quantity} | Subtotal : ${item.subtotal()} R$`)
    }) 
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}