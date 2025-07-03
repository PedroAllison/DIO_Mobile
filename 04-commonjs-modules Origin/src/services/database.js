//export default = EXPORTAR POR PADRÃO


exports.connectToDataBase = async (dataName) => {
    console.log("Conectando ao banco :" + dataName)
}

exports.disconnectDataBase = async () => {
    //logica
    console.log("desconectando")
}