//extract method - MAIS FACIL PARA MANUTENÇÃO 

async function permittedCharacters() {
    let permitted = []

    if(process.env.UPPERCASE_LETTERS == "true"){
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ") //OS 3 PONTOS INICIAIS SERVE PARA ADICIONAR ALGO QUE JA ESTA LA DENTRO AO INVES DE SUBSTITUIR
    }

    if(process.env.LOWERCASE_LETTERS == "true"){
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.NUMBERS == "true"){
        permitted.push(..."0123456789")
    }

    if(process.env.SPECIAL_CHARACTERS == "true"){
        permitted.push(..."!@#$%¨&*()_+-/?°~[]}{|'ºª")
    }

    return permitted 

}

export default permittedCharacters