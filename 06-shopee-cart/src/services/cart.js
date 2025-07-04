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

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

//encontrar indice do item
async function removeItem(userCart, item) {
    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((produto) => produto.name === item.name)
    console.log(`teu index é: ${indexFound}`)
    //2. caso não enconte o item 
    if (indexFound == -1) {
        console.log("Item não encontrado");
        return
    }
    //3. item > 1 subtrair um item, item = 1 deleter o item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return //UTILIZADO O RETURN NO FINAL PARA ELE EXECUTAR UMA AÇÃO DE CADA VEZ 
    }

    //4. caso item = 1 deleter o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return //UTILIZADO O RETURN NO FINAL PARA ELE EXECUTAR UMA AÇÃO DE CADA VEZ 
    }

}

// async function removeItem(userCart, index) {

//     const deleteItens = index -1;

//     //VERIFICANDO SE É MAIOR QUE 0 E MANOR QUE O TAMANHO DO CARRINHO
//     if(index >= 0 && index < userCart.length){
//         userCart.splice(deleteItens,1)
//     }
// }

async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total is: ")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
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