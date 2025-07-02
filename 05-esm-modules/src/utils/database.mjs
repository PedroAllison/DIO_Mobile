const databaseType = {
    userType: "admin",
    typeData: "datalocal"
}

async function connectToDatabase(dataname) {
    //logica de conexão
    console.log(`Conectando ao banco de dados ${dataname}`)
}

async function disconnectDatabase() {
    console.log("Desconectando do banco de dados")
}

async function sayHello(robot) {
    console.log(`Diga Hello ao meu novo robo: ${robot}`)
}

export { connectToDatabase, disconnectDatabase, sayHello, databaseType}