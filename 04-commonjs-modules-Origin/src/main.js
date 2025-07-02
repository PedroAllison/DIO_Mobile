const p = require("./services/products");
//OUTRA MANEIRA DE IMPORTAR FUNÇÃO POREM IMPORTANDO DIRETO PELO NOME DELA
//SEM PRECISAR ATRIBUIR UMA VARIAVEL, EX O p ACIMA
const { getFullName, productType } = require("./services/products")
const config = require("./services/config");
const db = require("./services/database")



async function main(){
    console.log("Hello World")
    

    // p.getFullName(" 408", "mousepad")
    getFullName("2", "mousepad")
    // p.getFullName(" 509", "teclado")
    // p.getProductLabel("mousepad")
    // p.productType.version
    // p.productType.tax
    

    // db.connectToDataBase()
    // db.disconnectDataBase()

    // console.log(config.client)
}

main();