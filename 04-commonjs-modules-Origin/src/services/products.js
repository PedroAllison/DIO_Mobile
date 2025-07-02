//TODAS AS FUNÇOES QUE LIDAM COM O PRODUTO
const productType = {
  version : "digital",
  tax: "x1",
}

//Hidden const 
// MEMBROS ESCONDIDOS, NADA MAIS DO QUE DO QUE UMA FUNÇÃO QUE NÃO PRECISA SER EXPORTADA POIS SÓ FAZ SENTIDO NESSE ARQUIVO
const apiURL = {
  url: "www.google.com/api"
}

async function getFullName(codeId, productName) {
    console.log("product" + codeId + "--" + productName)
    await doBreakLine()
}

//Hidden function
// É PARA EXPORTAR A FUNÇÃO PARA OUTROS ARQUIVOS 
async function doBreakLine(){
  console.log("\n")
}

async function getProductLabel(productName) {
  console.log("Product " + productName)
}

module.exports ={
    getFullName,
    getProductLabel,
    productType,
}